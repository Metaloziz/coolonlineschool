import { FC, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, CustomSelect, Input, Slider } from '@components';
import { sexParents } from '@mock/moks-data-select';
import cn from 'classnames';

import cl from './RegistrationData.module.scss';

interface Props {
  className?: string;
}

const RegistrationData: FC<Props> = ({ className }) => {
  const [isReady, setIsReady] = useState<number>(1);

  const updateStatus = (id: number) => {
    setIsReady(id);
  };

  return (
    <div className={cn(cl.container, className)}>
      <div className={cl.sliderBlock}>
        <h2>Ваши данные</h2>
        <div className={cl.sliderInfo}>
          <p>Выберите направление:</p>
          <Slider
            options={[
              { id: 1, text: 'Ментальная арифметика', onClick: updateStatus },
              { id: 2, text: 'Скорочтение', onClick: updateStatus },
            ]}
            colorTheme="blue"
            className={cl.bigSlider}
          />
        </div>
      </div>
      <div className={cl.blockChoice}>
        <div className={cl.blockParents}>
          <div>
            <Input className={cl.inputBlock} placeholder="Фамилия родителя" />
            <Input className={cl.inputBlock} placeholder="Имя родителя" />
            <Input className={cl.inputBlock} placeholder="Отчество родителя" />
          </div>
          <div>
            <Input className={cl.inputBlock} type="email" placeholder="Почта родителя" />
            <CustomSelect
              className={cl.selectBlock}
              options={sexParents}
              placeholder="Пол родителя"
            />
            <Input className={cl.inputBlock} placeholder="Телефон родителя" />
          </div>
        </div>
        <div className={cl.blockChildren}>
          <div>
            <Input className={cl.inputBlock} placeholder="Фамилия ученика" />
            <Input className={cl.inputBlock} placeholder="Имя ученика" />
            <Input className={cl.inputBlock} placeholder="Отчество ученика" />
          </div>
          <div>
            <Input className={cl.inputBlock} placeholder="Дата рождения ученика" />
            <CustomSelect
              className={cl.selectBlock}
              options={sexParents}
              placeholder="Пол ученика"
            />
            <Input className={cl.inputBlock} placeholder="Город" />
          </div>
        </div>
      </div>
      <div className={cl.codeBlock}>
        <Input className={cl.inputBlock} placeholder="Код тарифа" />
      </div>
      <Button colorTheme={ButtonColorThemes.red} className={cl.btnReg}>
        Зарегестрироваться
      </Button>
    </div>
  );
};

export default RegistrationData;
