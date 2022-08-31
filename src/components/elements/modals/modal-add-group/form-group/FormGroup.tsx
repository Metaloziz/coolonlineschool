import React, { Component } from 'react';

import { AddUserType } from '@components/elements/modals/modal-add-user/form-user/FormAddUser';
import {
  Control,
  Controller,
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from 'react-hook-form';
import CustomSelect from 'src/components/elements/custom-select/CustomSelect';
import SelectHomeworksForm from 'src/components/elements/select-homeworks-form/SelectHomeworksForm';
import TextField from 'src/components/elements/text-fild/TextFild';

import styles from './FormGroup.module.scss';

const arrTeacher = [
  { label: 'Попков Михаил Леонтьевич', value: '1' },
  { label: 'Круг  Михаил Владимирович', value: '2' },
  { label: 'Иванов Иван Иванович', value: '3' },
];

type FormGroupType = {
  name: string;
  telegram: string;
  watsapp: string;
  teacher: string;
};
type Props = {
  control: Control<FormGroupType, object>;
  errors: FieldErrorsImpl<DeepRequired<FormGroupType>>;
  register: UseFormRegister<FormGroupType>;
};

const FormGroup = ({ control, errors, register }: Props) => (
  <div className={styles.wrapper}>
    <div className={styles.box}>
      <div className={styles.title}>Наименование:</div>
      <div className={styles.boxRight}>
        <div className={styles.input}>
          <Controller
            name="name"
            render={({ field }) => <TextField {...field} />}
            control={control}
          />
        </div>
        <div className={styles.error}>{errors.name && errors.name?.message}</div>
      </div>
    </div>
    <div className={styles.box}>
      <div className={styles.title}>ФИО учителя:</div>
      <div className={styles.boxRight}>
        <div className={styles.select}>
          <Controller
            name="teacher"
            render={({ field }) => (
              <CustomSelect {...field} placeholder="Выбирите учителя" options={arrTeacher} />
            )}
            control={control}
          />
        </div>
        <div className={styles.error}>{errors.teacher && errors.teacher?.message}</div>
      </div>
    </div>
    <div className={styles.box}>
      <div className={styles.title}>Ссылка на telegram:</div>
      <div className={styles.boxRight}>
        <div className={styles.input}>
          <Controller
            name="telegram"
            render={({ field }) => <TextField {...field} />}
            control={control}
          />
        </div>
        <div className={styles.error}>{errors.telegram && errors.telegram?.message}</div>
      </div>
    </div>
    <div className={styles.box}>
      <div className={styles.title}>Ссылка на whatsapp:</div>
      <div className={styles.boxRight}>
        <div className={styles.input}>
          <Controller
            name="watsapp"
            render={({ field }) => <TextField {...field} />}
            control={control}
          />
        </div>
        <div className={styles.error}>{errors.watsapp && errors.watsapp?.message}</div>
      </div>
    </div>
  </div>
);
export default FormGroup;
