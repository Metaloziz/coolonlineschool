import React, { useEffect } from 'react';

import { classStore } from '@app/store/classStore';
import { ModalBasic } from '@components';
import FormGroup from '@components/elements/modals/modal-add-group/form-group/FormGroup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from 'src/components/elements/button/Button';
import * as yup from 'yup';

import styles from './ModalAddGroup.module.scss';

const ModalAddGroup = ({ closeMode, setOpen, open }: PropsType) => {
  useEffect(() => {
    classStore.getTeacher();
  }, []);

  const defaultValues = {
    name: '',
    teacher: '',
    telegram: '',
    whatsapp: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    // .matches(REG_NAME, 'допустима только кириллица')
    // .max(MAX_NAMES_LENGTH, `максимальная длинна ${MAX_NAMES_LENGTH} символов`)
    // .min(MIN_NAMES_LENGTH, `минимальная длинна ${MIN_NAMES_LENGTH} символа`),
    teacher: yup.string().required('Обязательное поле'),
    // .matches(REG_NAME, 'допустима только кириллица')
    // .max(MAX_NAMES_LENGTH, `максимальная длинна ${MAX_NAMES_LENGTH} символов`)
    // .min(MIN_NAMES_LENGTH, `минимальная длинна ${MIN_NAMES_LENGTH} символа`),
    telegram: yup.string().required('Обязательное поле'),
    //   .matches(REG_NAME, 'допустима только кириллица')
    //   .max(MAX_NAMES_LENGTH, `максимальная длинна ${MAX_NAMES_LENGTH} символов`)
    //   .min(MIN_NAMES_LENGTH, `минимальная длинна ${MIN_NAMES_LENGTH} символа`),
    // role: user ? yup.string().notRequired() : yup.string().required('Обязательное поле'),
    whatsapp: yup.string().required('Обязательное поле'),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<typeof defaultValues>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async values => {
    console.log(values);
    reset();
    setOpen(false);
  });

  return (
    <ModalBasic isVisibility={open} changeVisibility={setOpen}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3>Добавить группу</h3>
        </div>
        <form onSubmit={onSubmit}>
          <FormGroup register={register} control={control} errors={errors} />
          <div className={styles.addLevelBtn}>
            <Button type="submit">Сохранить</Button>
          </div>
        </form>
      </div>
    </ModalBasic>
  );
};

export default ModalAddGroup;

type PropsType = {
  closeMode: () => void;
  setOpen: (n: boolean) => void;
  open: boolean;
};
