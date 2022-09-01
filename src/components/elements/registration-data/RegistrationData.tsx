import { FC, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { auth } from '@app/store/authStore';
import { Button, CustomSelect, Input, Slider } from '@components';
import ModalBasic from '@components/elements/modals/modal-basic/ModalBasic';
import { yupResolver } from '@hookform/resolvers/yup';
import { sexParents } from '@mock/moks-data-select';
import { convert } from '@utils/convert';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';

import InformationItem from '../information-item/InformationItem';
import ModalSmsCode from '../modals/modal-sms-code/ModalSmsCode';

import cl from './RegistrationData.module.scss';

export enum SexEnum {
  Male = 'Мужской',
  Female = 'Женский',
}

export type RegisterData = {
  parentsLastName: string;
  parentsName: string;
  parentsPatronymic: string;
  parentsEmail: string;
  parentSex: null | SexEnum;
  parentsPhone: string;
  studentsLastName: string;
  studentsName: string;
  studentsPatronymic: string;
  studentsBirthDate: Date | null;
  studentSex: null | SexEnum;
  studentsCity: string;
  codeTariff: number | null;
};

const defaultValues = {
  parentsLastName: '',
  parentsName: '',
  parentsPatronymic: '',
  parentsEmail: '',
  parentSex: null,
  parentsPhone: '',
  studentsLastName: '',
  studentsPatronymic: '',
  studentsBirthDate: null,
  studentSex: null,
  studentsCity: '',
  codeTariff: null,
};

interface Props {
  className?: string;
}

const RegistrationData: FC<Props> = ({ className }) => {
  const [isReady, setIsReady] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);

  const schema = yup.object().shape({
    parentsLastName: yup.string().required('Обязательное поле').min(3),
    parentsName: yup.string().required('Обязательное поле').min(3),
    parentsPatronymic: yup.string().required('Обязательное поле').min(3),
    parentsEmail: yup.string().required('Обязательное поле').email(),
    parentSex: yup.string().required('Обязательное поле').nullable(),
    parentsPhone: yup.string().required('Обязательное поле'),
    studentsLastName: yup.string().required('Обязательное поле').min(3),
    studentsName: yup.string().required('Обязательное поле').min(3),
    studentsPatronymic: yup.string().required('Обязательное поле').min(3),
    studentsBirthDate: yup
      .date()
      .required('Обязательное поле')
      .nullable()
      .min(new Date(1900, 0, 1)),
    studentSex: yup.string().required('Обязательное поле').nullable(),
    studentsCity: yup.string().required('Обязательное поле').min(3),
    codeTariff: yup.string().required('Обязательное поле').nullable(),
  });

  const {
    register,
    formState: {
      errors: {
        parentsLastName,
        parentsName,
        parentsPatronymic,
        parentsEmail,
        parentSex,
        parentsPhone,
        studentsLastName,
        studentsName,
        studentsPatronymic,
        studentsBirthDate,
        studentSex,
        studentsCity,
        codeTariff,
      },
      isValid,
    },
    handleSubmit,
    control,
  } = useForm<RegisterData>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onBlur',
  });

  const [saveData, setSaveData] = useState<RegisterData | null>(null);

  const handlerGetCode = async (userCode: number) => {
    if (saveData) {
      const convertedData = convert(saveData);
      await auth.register({ ...convertedData, smsCode: userCode, speciality: 'reading' });
    }
  };

  const onSubmit: SubmitHandler<RegisterData> = async data => {
    if (isValid) {
      setSaveData(data);
      await auth.sms(data.parentsPhone);
      setShowModal(true);
    }
  };

  return (
    <div className={cn(cl.container, className)}>
      <div className={cl.sliderBlock}>
        <h2>Ваши данные</h2>
        <div className={cl.sliderInfo}>
          <p>Выберите направление:</p>
          <Slider
            options={[
              { id: 1, text: 'Ментальная арифметика', onClick: setIsReady },
              { id: 2, text: 'Скорочтение', onClick: setIsReady },
            ]}
            colorTheme="blue"
            className={cl.bigSlider}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cl.blockChoice}>
          <div className={cl.blockParents}>
            <div>
              <Input
                id="1"
                className={cl.inputBlock}
                placeholder="Фамилия родителя"
                {...register('parentsLastName', {
                  required: true,
                })}
              />
              <span>{parentsLastName?.message}</span>
              <Input
                id="2"
                className={cl.inputBlock}
                placeholder="Имя родителя"
                {...register('parentsName', {
                  required: true,
                })}
              />
              <span>{parentsName?.message}</span>
              <Input
                id="3"
                className={cl.inputBlock}
                placeholder="Отчество родителя"
                {...register('parentsPatronymic', {
                  required: true,
                })}
              />
              <span>{parentsPatronymic?.message}</span>
            </div>
            <div>
              <Input
                id="4"
                className={cl.inputBlock}
                placeholder="Почта родителя"
                {...register('parentsEmail', {
                  required: true,
                })}
              />
              <span>{parentsEmail?.message}</span>
              <Controller
                control={control}
                name="parentSex"
                render={({ field: { onChange, onBlur } }) => (
                  <CustomSelect
                    onBlur={onBlur}
                    onChange={onChange}
                    className={cl.selectBlock}
                    options={sexParents}
                    placeholder="Пол ученика"
                  />
                )}
              />
              <span>{parentSex?.message}</span>
              <Controller
                control={control}
                name="parentsPhone"
                render={({ field: { onChange, onBlur } }) => (
                  <InformationItem
                    onChange={onChange}
                    onBlur={onBlur}
                    id="5"
                    variant="phone"
                    className={cl.inputNumberBlock}
                    placeholder="Телефон родителя"
                  />
                )}
              />
              <span>{parentsPhone?.message}</span>
            </div>
          </div>
          <div className={cl.blockChildren}>
            <div>
              <Input
                id="6"
                className={cl.inputBlock}
                placeholder="Фамилия ученика"
                {...register('studentsLastName', {
                  required: true,
                })}
              />
              <span>{studentsLastName?.message}</span>
              <Input
                id="7"
                className={cl.inputBlock}
                placeholder="Имя ученика"
                {...register('studentsName', {
                  required: true,
                })}
              />
              <span>{studentsName?.message}</span>
              <Input
                id="8"
                className={cl.inputBlock}
                placeholder="Отчество ученика"
                {...register('studentsPatronymic', {
                  required: true,
                })}
              />
              <span>{studentsPatronymic?.message}</span>
            </div>
            <div>
              <Input
                id="9"
                className={cl.inputBlock}
                placeholder="Дата рождения ученика"
                {...register('studentsBirthDate', {
                  required: true,
                })}
              />
              <span>{studentsBirthDate?.message}</span>
              <Controller
                control={control}
                name="studentSex"
                render={({ field: { onChange, onBlur } }) => (
                  <CustomSelect
                    onBlur={onBlur}
                    onChange={onChange}
                    className={cl.selectBlock}
                    options={sexParents}
                    placeholder="Пол ученика"
                  />
                )}
              />
              <span>{studentSex?.message}</span>
              <Input
                id="10"
                className={cl.inputBlock}
                placeholder="Город"
                {...register('studentsCity', {
                  required: true,
                })}
              />
              <span>{studentsCity?.message}</span>
            </div>
          </div>
        </div>
        <div className={cl.codeBlock}>
          <Input
            id="11"
            className={cl.inputBlock}
            placeholder="Код тарифа"
            {...register('codeTariff', {
              required: true,
            })}
          />
          <span>{codeTariff?.message}</span>
        </div>
        <Button
          colorTheme={ButtonColorThemes.red}
          className={cl.btnReg}
          type="submit"
          disabled={auth.isLoading}
        >
          Зарегестрироваться
        </Button>
      </form>
      <ModalBasic isVisibility={showModal} changeVisibility={setShowModal}>
        <ModalSmsCode onClose={() => setShowModal(false)} getCode={handlerGetCode} />
      </ModalBasic>
    </div>
  );
};

export default observer(RegistrationData);
