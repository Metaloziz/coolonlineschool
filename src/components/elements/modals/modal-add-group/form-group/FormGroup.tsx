import React, { useEffect } from 'react';

import { classStore } from '@app/store/classStore';
import {
  Control,
  Controller,
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from 'react-hook-form';
import CustomSelect from 'src/components/elements/custom-select/CustomSelect';
import TextField from 'src/components/elements/text-fild/TextFild';

import styles from './FormGroup.module.scss';

type FormGroupType = {
  name: string;
  telegram: string;
  whatsapp: string;
  teacher: string;
};
type Props = {
  control: Control<FormGroupType, object>;
  errors: FieldErrorsImpl<DeepRequired<FormGroupType>>;
  register: UseFormRegister<FormGroupType>;
};

const FormGroup = ({ control, errors }: Props) => (
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
              <CustomSelect
                {...field}
                placeholder="Выбирите учителя"
                options={classStore.listOfTeacher}
              />
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
            name="whatsapp"
            render={({ field }) => <TextField {...field} />}
            control={control}
          />
        </div>
        <div className={styles.error}>{errors.whatsapp && errors.whatsapp?.message}</div>
      </div>
    </div>
  </div>
);
export default FormGroup;
