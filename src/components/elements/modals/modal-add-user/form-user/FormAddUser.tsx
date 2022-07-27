import React, { FC } from 'react';

import { SexEnum } from '@app/enums';
import SimpleSelect from '@components/elements/simple-select/SimpleSelect';
import TextCustomField from '@components/elements/text-custom-field/TextCustomField';
import { yupResolver } from '@hookform/resolvers/yup';
import avatar from '@images/pervoklasnik/pervoklasnin 1.png';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './FormAddUser.module.scss';

type Props = {
  onCloseModal: () => void;
};

type SexType = { label: SexEnum; value: SexEnum };

type AddUserType = {
  firstName: string;
  middleName: string;
  lastName: string;
  role: { label: string; value: string }[];
  sex: SexType[];
  city: string;
  phone: string;
  birthdate: string;
  email: string;
  group: { label: string; value: string }[];
  teacher: { label: string; value: string }[];
  payForm: string;
  payBy: string;
};

const roleOptions = [
  { label: 'Ученик', value: 'student' },
  { label: 'Учитель', value: 'teacher' },
  { label: 'Администратор', value: 'franchiseeAdmin' },
  { label: 'Франшиза', value: 'franchisee' },
];

const teacherOptions = [
  { label: 'Пупков М.И', value: '1' },
  { label: 'Казаков М.И', value: '2' },
  { label: 'Филимонов М.И', value: '3' },
  { label: 'Кирилюк М.И', value: '4' },
];

const groupOptions = [
  { label: '678', value: '1' },
  { label: '679', value: '2' },
  { label: '680', value: '3' },
  { label: '681', value: '4' },
];

const sexOptions = Object.values(SexEnum).map(el => ({ label: el, value: el }));

const FormAddUser: FC<Props> = observer(props => {
  const defaultValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    role: roleOptions[0],
    sex: sexOptions[0],
    city: '',
    phone: '',
    birthdate: '',
    email: '',
    group: groupOptions[0],
    teacher: teacherOptions[0],
    payForm: '',
    payBy: '',
  };

  const schema = yup.object().shape({
    firstName: yup.string().required('Обязательное поле'),
    middleName: yup.string().required('Обязательное поле'),
    lastName: yup.string().required('Обязательное поле'),
    role: yup.object().required('Обязательное поле'),
    sex: yup.object().required('Обязательное поле'),
    city: yup.object().required('Обязательное поле'),
    // phone: yup.string().required('Обязательное поле'), // todo как сделать не обязательным ?
    birthdate: yup.string().required('Обязательное поле'),
    // email: yup.string().required('Обязательное поле').email(), // todo как сделать не обязательным ?
    // group: yup.object().required('Обязательное поле'),
    // teacher: yup.string().required('Обязательное поле'),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(schema), defaultValues });

  // const onSubmit: SubmitHandler<AddUserType> = (data) => console.log(data);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Добавление/изменение пользователя</h2>
      <div className={styles.row}>
        <div className={styles.imageWrapper}>
          <Image src={avatar} width="290" height="290" alt="student" />
        </div>
        <div className={styles.table}>
          <form>
            <Controller
              name="middleName"
              render={({ field }) => (
                <TextCustomField
                  {...field}
                  label="Фамилия:"
                  width="400px"
                  error={errors.middleName?.message}
                />
              )}
              control={control}
            />
            <Controller
              name="firstName"
              render={({ field }) => (
                <TextCustomField
                  {...field}
                  label="Имя:"
                  width="400px"
                  error={errors.firstName?.message}
                />
              )}
              control={control}
            />
            <Controller
              name="lastName"
              render={({ field }) => (
                <TextCustomField
                  {...field}
                  label="Отчество:"
                  width="400px"
                  error={errors.lastName?.message}
                />
              )}
              control={control}
            />
            <div className={styles.table__select}>
              <Controller
                name="sex"
                render={({ field }) => (
                  <SimpleSelect
                    {...field}
                    title="Пол:"
                    options={sexOptions}
                    error={errors.sex?.message}
                  />
                )}
                control={control}
              />
              <Controller
                name="role"
                render={({ field }) => (
                  <SimpleSelect
                    {...field}
                    title="Роль:"
                    options={roleOptions}
                    // @ts-ignore
                    error={errors.sex?.message}
                  />
                )}
                control={control}
              />
            </div>
            <Controller
              name="city"
              render={({ field }) => (
                <TextCustomField
                  {...field}
                  label="Город:"
                  width="400px"
                  error={errors.city?.message}
                />
              )}
              control={control}
            />
            <Controller
              name="phone"
              render={({ field }) => (
                <TextCustomField
                  {...field}
                  label="Телефон:"
                  width="400px"
                  error={errors.phone?.message}
                />
              )}
              control={control}
            />
            <div className={styles.table__row}>
              <div className={styles.table__column}>
                <div className={styles.table__birthdate}>
                  <Controller
                    name="birthdate"
                    render={({ field }) => (
                      <TextCustomField
                        width="140px"
                        {...field}
                        label="Дата рождения:"
                        error={errors.birthdate?.message}
                      />
                    )}
                    control={control}
                  />
                </div>
                <div className={styles.table__teacher}>
                  <Controller
                    name="teacher"
                    render={({ field }) => (
                      <SimpleSelect
                        {...field}
                        title="Учитель:"
                        options={teacherOptions}
                        error={errors.teacher?.message}
                      />
                    )}
                    control={control}
                  />
                </div>
                <div className={styles.table__payform}>
                  <Controller
                    name="payForm"
                    render={({ field }) => (
                      <TextCustomField
                        {...field}
                        width="95px"
                        label="Оплачено с:"
                        error={errors.payForm?.message}
                      />
                    )}
                    control={control}
                  />
                </div>
              </div>
              <div className={styles.table__column}>
                <div className={styles.table__email}>
                  <Controller
                    name="email"
                    render={({ field }) => (
                      <TextCustomField
                        {...field}
                        width="140px"
                        label="Почта:"
                        error={errors.email?.message}
                      />
                    )}
                    control={control}
                  />
                </div>
                <div className={styles.table__group}>
                  <Controller
                    name="group"
                    render={({ field }) => (
                      <SimpleSelect
                        {...field}
                        title="Группа:"
                        options={groupOptions}
                        error={errors.group?.message}
                      />
                    )}
                    control={control}
                  />
                </div>
                <div className={styles.table__payby}>
                  <Controller
                    name="payBy"
                    render={({ field }) => (
                      <TextCustomField
                        ln={1}
                        {...field}
                        width="95px"
                        label="Оплачено по:"
                        error={errors.payBy?.message}
                      />
                    )}
                    control={control}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default FormAddUser;
