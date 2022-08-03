import { FC, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, CustomSelect, Input, Slider } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { sexParents } from '@mock/moks-data-select';
import cn from 'classnames';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';

import InformationItem from '../information-item/InformationItem';

import cl from './RegistrationData.module.scss';

export enum SexEnum {
  Male = 'Мужской',
  Female = 'Женский',
}

type Inputs = {
  parentsLastName: string;
  parentsName: string;
  parentsPatronymic: string;
  parentsEmail: string;
  parentsSex: SexEnum | null;
  parentsPhone: string;
  studentsLastName: string;
  studentsName: string;
  studentsPatronymic: string;
  studentsBirthDate: number | null;
  studentsSex: SexEnum | null;
  studentsCity: string;
  codeTariff: number | null;
};

const defaultValues = {
  parentsLastName: '',
  parentsName: '',
  parentsPatronymic: '',
  parentsEmail: '',
  parentsSex: null,
  parentsPhone: '',
  studentsLastName: '',
  studentsPatronymic: '',
  studentsBirthDate: null,
  studentsSex: null,
  studentsCity: '',
  codeTariff: null,
};

interface Props {
  className?: string;
}

const RegistrationData: FC<Props> = ({ className }) => {
  const [isReady, setIsReady] = useState<number>(1);

  const schema = yup.object().shape({
    parentsLastName: yup.string().required('Обязательное поле'),
    parentsName: yup.string().required('Обязательное поле'),
    parentsPatronymic: yup.string().required('Обязательное поле'),
    parentsEmail: yup
      .string()
      .required('Обязательное поле')
      .email()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Не валидный email'),
    parentsSex: yup.string().required('Обязательное поле').nullable(),
    parentsPhone: yup.string().required('Обязательное поле'),
    studentsLastName: yup.string().required('Обязательное поле'),
    studentsName: yup.string().required('Обязательное поле'),
    studentsPatronymic: yup.string().required('Обязательное поле'),
    studentsBirthDate: yup.number().required('Обязательное поле').nullable().positive().integer(),
    studentsSex: yup.string().required('Обязательное поле').nullable(),
    studentsCity: yup.string().required('Обязательное поле'),
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
        parentsSex,
        parentsPhone,
        studentsLastName,
        studentsName,
        studentsPatronymic,
        studentsBirthDate,
        studentsSex,
        studentsCity,
        codeTariff,
      },
    },
    handleSubmit,
    reset,
    control,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    // reset();
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
                name="parentsSex"
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
              <span>{parentsSex?.message}</span>
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
                name="studentsSex"
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
              {/* <CustomSelect */}
              {/*  className={cl.selectBlock} */}
              {/*  options={sexParents} */}
              {/*  placeholder="Пол ученика" */}
              {/*  {...register('studentsSex', { */}
              {/*    required: true, */}
              {/*  })} */}
              {/* /> */}
              <span>{studentsSex?.message}</span>
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
        <Button colorTheme={ButtonColorThemes.red} className={cl.btnReg} type="submit">
          Зарегестрироваться
        </Button>
      </form>
    </div>
  );
};

export default RegistrationData;
