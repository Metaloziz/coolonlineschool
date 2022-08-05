import React, { FC } from 'react';

import { SexEnum } from '@app/enums';
import SimpleSelect from '@components/elements/simple-select/SimpleSelect';
import TextCustomField from '@components/elements/text-custom-field/TextCustomField';
import avatar from '@images/pervoklasnik/pervoklasnin 1.png';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import { Control, Controller, DeepRequired, FieldErrorsImpl } from 'react-hook-form';
import * as yup from 'yup';

import { groupOptions, roleOptions, sexOptions, teacherOptions } from '../ModalAddUser';

import styles from './FormAddUser.module.scss';

type Props = {
  onCloseModal: () => void;
  control: Control<AddUserType, object>;
  errors: FieldErrorsImpl<DeepRequired<AddUserType>>;
};

type SexType = { label: SexEnum; value: SexEnum };

export type AddUserType = {
  firstName: string;
  middleName: string;
  lastName: string;
  role: { label: string; value: string };
  sex: SexType;
  city: string;
  phone: string;
  birthdate: string;
  email: string;
  group: { label: string; value: string };
  teacher: { label: string; value: string };
  payForm: string;
  payBy: string;
};

const FormAddUser: FC<Props> = props => {
  const { control, errors } = props;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Добавление/изменение пользователя</h2>
      <div className={styles.row}>
        <div className={styles.imageWrapper}>
          <Image src={avatar} width="290" height="290" alt="student" />
        </div>
        <div className={styles.table}>
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
        </div>
      </div>
    </div>
  );
};

export default observer(FormAddUser);
