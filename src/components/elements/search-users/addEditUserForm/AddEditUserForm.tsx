import React, { FC, useEffect, useState } from 'react';

import { RolesNames } from '@app/enums';
import { PayloadUser } from '@app/services/userService';
import { Roles } from '@app/store';
import { Option } from '@app/types/Option';
import { UserType } from '@app/types/UserTypes';
import { Button } from '@components';
import { SexEnum } from '@components/elements/registration-data/RegistrationData';
import CustomSelect from '@components/elements/search-users/addEditUserForm/components/select-mui/CustomSelect';
import TextFieldPhoneCustom from '@components/elements/search-users/addEditUserForm/components/text-field-phone-mui/TextFieldPhoneCustom';
import { action } from '@components/elements/search-users/addEditUserForm/utils/action';
import { isStudentRole } from '@components/elements/search-users/addEditUserForm/utils/isStudentRole';
import { sexOptions } from '@components/elements/search-users/addEditUserForm/utils/sexOptions';
import { MAX_NAMES_LENGTH, MIN_NAMES_LENGTH, REG_EMAIL } from '@constants/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, FormControl, Grid, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import rus from 'dayjs/locale/ru';
import { observer } from 'mobx-react-lite';
import { Controller, useForm } from 'react-hook-form';
import styles from 'src/components/elements/search-users/addEditUserForm/AddEditUserForm.module.scss';
import * as yup from 'yup';

import TextFieldCustom from './components/text-field-mui/TextFieldCustom';
import { removeEmptyFields } from './utils/removeEmptyFields';

type Props = {
  onCloseModal: () => void;
  user?: UserType;
};

export const roleOptions: Option[] = [
  { label: RolesNames.Student, value: Roles.Student },
  { label: RolesNames.Teacher, value: Roles.Teacher },
];

export const AddEditUserForm: FC<Props> = observer(({ user, onCloseModal }) => {
  // const groupOptions: Option[] = [new Option()];
  // const tariffsOptions: Option[] = [new Option()];
  const [selectedRole, setSelectedRole] = useState<Roles>();

  useEffect(() => {
    if (user?.roleCode) {
      setSelectedRole(user.roleCode as Roles);
    }
  }, []);

  const findSex = () => (user?.sex ? sexOptions[0]?.value : sexOptions[1]?.value);

  const defaultValues = {
    firstName: user?.firstName || 'default',
    middleName: user?.middleName || 'default',
    lastName: user?.lastName || 'default',
    role: user?.roleCode || '', // не изменяется при редактировании
    sex: findSex() || sexOptions[0],
    city: user?.city || 'default',
    phone: user?.phone || '',
    birthdate: user?.birthdate?.date || '',
    email: user?.email || 'default@default.by',
    franchise: '', // не изменяется при редактировании
    // tariff: user?.tariff?.id || '', // не изменяется при редактировании
    // group: user?.groups[0]?.groupId || '', // не изменяется при редактировании
  };

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Обязательное поле')
      .max(MAX_NAMES_LENGTH, `Максимальная длинна ${MAX_NAMES_LENGTH} символов`)
      .min(MIN_NAMES_LENGTH, `Минимальная длинна ${MIN_NAMES_LENGTH} символа`),
    middleName: yup
      .string()
      .required('Обязательное поле')
      .max(MAX_NAMES_LENGTH, `Максимальная длинна ${MAX_NAMES_LENGTH} символов`)
      .min(MIN_NAMES_LENGTH, `минимальная длинна ${MIN_NAMES_LENGTH} символа`),
    lastName: yup
      .string()
      .required('Обязательное поле')
      .max(MAX_NAMES_LENGTH, `Максимальная длинна ${MAX_NAMES_LENGTH} символов`)
      .min(MIN_NAMES_LENGTH, `Минимальная длинна ${MIN_NAMES_LENGTH} символа`),
    role: user ? yup.string().notRequired() : yup.string().required('Обязательное поле'),
    sex: yup.string().required('Обязательное поле'),
    birthdate: yup.string().required('Обязательное поле'),
    city: yup
      .string()
      .required('Обязательное поле')
      .max(MAX_NAMES_LENGTH, `Максимальная длинна ${MAX_NAMES_LENGTH} символов`)
      .min(MIN_NAMES_LENGTH, `Минимальная длинна ${MIN_NAMES_LENGTH} символа`),
    phone:
      selectedRole === Roles.Student
        ? yup.string().notRequired()
        : yup.string().required('Обязательное поле'),

    email:
      selectedRole === Roles.Student
        ? yup.string().notRequired()
        : yup
            .string()
            .email('Обязательное поле')
            .matches(REG_EMAIL, 'Введите валидный email')
            .required('Обязательное поле'),
    // eslint-disable-next-line no-nested-ternary
    // franchise: user ? yup.string().notRequired() : yup.string().required('Обязательное поле'),
    // tariff:
    //   selectedRole === Roles.Student
    //     ? yup.string().required('Обязательное поле')
    //     : yup.string().notRequired(),
  });

  const {
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors },
  } = useForm<typeof defaultValues>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  console.log('errors', [errors]); // for dev

  const onSubmit = handleSubmit(async values => {
    const newUserData: PayloadUser = {
      sex: (values.sex as SexEnum) === SexEnum.Male,
      birthdate: values.birthdate,
      city: values.city,
      role: values.role as Roles,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      middleName: values.middleName,
      phone: values.phone.replace(/[()\s+-]/g, ''),
      groups: [], // todo переделать на создание груповой связи
      // tariffId: values.tariff,
    };

    action(
      user,
      removeEmptyFields(newUserData),
      setError,
      values.role as Roles,
      onCloseModal,
      reset,
    );
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <Box className={styles.wrapper}>
          <Grid container item spacing={2}>
            <Grid item xs={12}>
              <h2 className={styles.tableTitle}>
                {user ? 'Редактирование пользователя' : 'Регистрация пользователя'}
              </h2>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="middleName"
                render={({ field }) => (
                  <TextFieldCustom
                    type="text"
                    autoComplete="on"
                    label="Фамилия"
                    error={errors.middleName?.message}
                    {...field}
                  />
                )}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="firstName"
                render={({ field }) => (
                  <TextFieldCustom
                    type="text"
                    autoComplete="on"
                    label="Имя"
                    error={errors.firstName?.message}
                    {...field}
                  />
                )}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="lastName"
                render={({ field }) => (
                  <TextFieldCustom
                    type="text"
                    autoComplete="on"
                    label="Отчество"
                    error={errors.lastName?.message}
                    {...field}
                  />
                )}
                control={control}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="city"
                render={({ field }) => (
                  <TextFieldCustom
                    type="text"
                    autoComplete="on"
                    {...field}
                    label="Город"
                    error={errors.city?.message}
                  />
                )}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={rus}>
                <Controller
                  name="birthdate" // todo не сохраняется, нужен формат для отправления
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <DatePicker
                        onChange={newValue => field.onChange(newValue)}
                        inputFormat="DD-MM-YYYY"
                        value={field.value}
                        renderInput={e => (
                          <TextField
                            {...e}
                            sx={{ width: '100%' }}
                            label="Дата рождения"
                            error={!!errors.birthdate?.message}
                            helperText={errors.birthdate?.message}
                          />
                        )}
                      />
                    </FormControl>
                  )}
                  control={control}
                />
              </LocalizationProvider>
            </Grid>
            {!user && (
              <>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="role"
                    render={({ field }) => (
                      <CustomSelect
                        {...field}
                        onChange={e => {
                          setSelectedRole(e.target.value as Roles);
                          field.onChange(e);
                        }}
                        defaultValue={{ value: '', label: '' }}
                        title="Роль"
                        options={roleOptions}
                        error={errors.role?.message}
                      />
                    )}
                    control={control}
                  />
                </Grid>
              </>
            )}
            {/* {!user && isStudentRole(selectedRole) && ( */}
            {/*  <Grid item xs={12} sm={6}> */}
            {/*    <Controller */}
            {/*      name="tariff" */}
            {/*      render={({ field }) => ( */}
            {/*        <CustomSelect */}
            {/*          {...field} */}
            {/*          // onChange={e => { */}
            {/*          //   field.onChange(e); */}
            {/*          // }} */}
            {/*          defaultValue={{ value: '', label: '' }} */}
            {/*          title="Тариф" */}
            {/*          options={tariffsOptions} */}
            {/*          error={errors?.tariff?.message?.toString()} */}
            {/*        /> */}
            {/*      )} */}
            {/*      control={control} */}
            {/*    /> */}
            {/*  </Grid> */}
            {/* )} */}
            {/* {!user && isStudentTeacherEducation(selectedRole) && ( */}
            {/*  <Grid item xs={12} sm={6}> */}
            {/*    <Controller */}
            {/*      name="group" */}
            {/*      render={({ field }) => ( */}
            {/*        <CustomSelect */}
            {/*          {...field} */}
            {/*          onChange={e => { */}
            {/*            field.onChange(e); */}
            {/*          }} */}
            {/*          defaultValue={{ value: '', label: '' }} */}
            {/*          title="Группа" */}
            {/*          options={groupOptions} */}
            {/*          error={errors.group?.message} */}
            {/*        /> */}
            {/*      )} */}
            {/*      control={control} */}
            {/*    /> */}
            {/*  </Grid> */}
            {/* )} */}
            {!isStudentRole(selectedRole) && (
              <>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="phone"
                    render={({ field }) => (
                      <TextFieldPhoneCustom
                        {...field}
                        label="Телефон"
                        error={errors.phone?.message}
                      />
                    )}
                    control={control}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="email"
                    render={({ field }) => (
                      <TextFieldCustom
                        type="text"
                        autoComplete="on"
                        {...field}
                        label="Почта"
                        error={errors.email?.message}
                      />
                    )}
                    control={control}
                  />
                </Grid>
              </>
            )}

            <Grid item xs={13} sm={6}>
              <Controller
                name="sex"
                render={({ field }) => (
                  <CustomSelect
                    {...field}
                    title="Пол"
                    options={sexOptions}
                    defaultValue={{ value: '', label: '' }}
                    error={errors.sex?.message}
                  />
                )}
                control={control}
              />
            </Grid>

            <Grid xs={12} sm={12} margin="10px 14px" display="flex">
              <Grid item xs={12} sm={6.2}>
                <Button type="submit">Сохранить</Button>
              </Grid>
              {/* <Grid item xs={12} sm={5.8}> */}
              {/*  {user && <SetStatusButton status={user?.status} id={user.id} />} */}
              {/* </Grid> */}
            </Grid>
          </Grid>
        </Box>
      </form>
      {/* {user?.roleCode === Roles.Student && ( */}
      {/*  <div> */}
      {/*    {user?.parents && ( */}
      {/*      <StudentParentsFormContainer */}
      {/*        franchiseId={currentFranchiseId} */}
      {/*        studentId={studentId} */}
      {/*        onCloseModal={onCloseModal} */}
      {/*        parents={user.parents} */}
      {/*        visibility={visibility} */}
      {/*      /> */}
      {/*    )} */}
      {/*    {isParentShown && studentId && ( */}
      {/*      <StudentParentsFormContainer */}
      {/*        franchiseId={currentFranchiseId} */}
      {/*        studentId={studentId} */}
      {/*        onCloseModal={onCloseModal} */}
      {/*        visibility={visibility} */}
      {/*      /> */}
      {/*    )} */}
      {/*  </div> */}
      {/* )} */}
    </>
  );
});

export default AddEditUserForm;
