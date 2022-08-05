import React from 'react';

import { SexEnum } from '@app/enums';
import { users } from '@app/store/usersStore';
import { ModalBasic } from '@components';
import CustomButton from '@components/elements/custom-button/CustomButton';
import { observer } from 'mobx-react-lite';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormAddUser, { AddUserType } from './form-user/FormAddUser';
import styles from './ModalAddUser.module.scss';

type ModalAddUserParentPropsType = {
  closeMode: () => void;
  setOpen: (n: boolean) => void;
  open: boolean;
};

export const roleOptions = [
  { label: 'Ученик', value: 'student' },
  { label: 'Учитель', value: 'teacher' },
  { label: 'Администратор', value: 'franchiseeAdmin' },
  { label: 'Франшиза', value: 'franchisee' },
];

export const teacherOptions = [
  { label: 'Пупков М.И', value: '1' },
  { label: 'Казаков М.И', value: '2' },
  { label: 'Филимонов М.И', value: '3' },
  { label: 'Кирилюк М.И', value: '4' },
];

export const groupOptions = [
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

const ModalAddUser = ({ closeMode, setOpen, open }: ModalAddUserParentPropsType) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
    // } = useForm({ resolver: yupResolver(schema), defaultValues });
  } = useForm({ defaultValues });

  const onSubmit: SubmitHandler<AddUserType> = data => {
    users.createUser(data);
  };

  return (
    <ModalBasic isVisibility={open} changeVisibility={setOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.modal}>
          <FormAddUser control={control} errors={errors} onCloseModal={closeMode} />
        </div>
        <div className={styles.button}>
          <CustomButton type="submit" title="Сохранить" />
        </div>
      </form>
    </ModalBasic>
  );
};

export default observer(ModalAddUser);
