import React from 'react';

import { SexEnum } from '@app/enums';
import { users } from '@app/store/usersStore';
import { ModalBasic } from '@components';
import CustomButton from '@components/elements/custom-button/CustomButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormAddUser, { AddUserType } from './form-user/FormAddUser';
import styles from './ModalAddUser.module.scss';

type ModalAddUserParentPropsType = {
  idUser: string;
  setting: SettingType;
  closeMode: () => void;
  setOpen: (n: boolean) => void;
  open: boolean;
};

export type SettingType = 'add' | 'edit';
export const roleOptions = [
  { label: '', value: '0' },
  { label: 'Ученик', value: 'student' },
  { label: 'Учитель', value: 'teacher' },
];

export const teacherOptions = [
  { label: '', value: '0' },
  { label: 'Пупков М.И', value: '1' },
  { label: 'Казаков М.И', value: '2' },
  { label: 'Филимонов М.И', value: '3' },
  { label: 'Кирилюк М.И', value: '4' },
];

export const groupOptions = [
  { label: '', value: '0' },
  { label: '678', value: '1' },
  { label: '679', value: '2' },
  { label: '680', value: '3' },
  { label: '681', value: '4' },
];

export const sexOptions = Object.values(SexEnum).map(el => ({ label: el, value: el }));

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
};

const schemaOne = yup.object().shape({
  firstName: yup.string().required('Обязательное поле'),
  middleName: yup.string().required('Обязательное поле'),
  lastName: yup.string().required('Обязательное поле'),
  role: yup.object().required('Обязательное поле'),
  sex: yup.object().required('Обязательное поле'),
  group: yup.object().required('Обязательное поле'),
  city: yup.string().required('Обязательное поле'),
  phone: yup.string(),
  birthdate: yup.string().required('Обязательное поле'),
  email: yup.string().email(),
});

const schemaTwo = yup.object().shape({
  firstName: yup.string(),
  middleName: yup.string(),
  lastName: yup.string(),
  role: yup.object().required('Обязательное поле'),
  sex: yup.object().required('Обязательное поле'),
  group: yup.object().required('Обязательное поле'),
  city: yup.string(),
  phone: yup.string(),
  birthdate: yup.string(),
  email: yup.string().email(),
});

const ModalAddUser = ({
  closeMode,
  setOpen,
  open,
  setting,
  idUser,
}: ModalAddUserParentPropsType) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues,
    resolver: setting === 'add' ? yupResolver(schemaOne) : yupResolver(schemaTwo),
  });
  // } = useForm({ mode: 'onBlur', defaultValues });

  const onSubmit: SubmitHandler<AddUserType> = data => {
    if (setting === 'add') {
      users.createUser(data);
    }

    if (setting === 'edit') {
      console.log(data);
      users.editUser(data, idUser);
    }
    reset();
    setOpen(false);
  };

  return (
    <ModalBasic isVisibility={open} changeVisibility={setOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.modal}>
          <FormAddUser
            setting={setting}
            register={register}
            control={control}
            errors={errors}
            onCloseModal={closeMode}
          />
        </div>
        <div className={styles.button}>
          <CustomButton type="submit" title="Сохранить" />
        </div>
      </form>
    </ModalBasic>
  );
};

export default observer(ModalAddUser);
