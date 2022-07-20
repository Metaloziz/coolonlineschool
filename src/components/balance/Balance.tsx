import { FC, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, SwitchButton } from '@components';
import contractIcon from '@svgs/button/contract-icon.svg';
import cn from 'classnames';
import Image from 'next/image';

import cl from './Balance.module.scss';

interface IBalance {
  lessonCount: number;
  tariffPlanFirst: string;
  tariffPlanSecond: string;
  balanceFunds: number;
  className?: string;
  openModal: () => void;
  isAutoRefill: boolean;
}

const Balance: FC<IBalance> = ({
  balanceFunds,
  lessonCount,
  tariffPlanFirst,
  tariffPlanSecond,
  className,
  openModal,
  isAutoRefill,
}) => {
  const [isChecked, setIsChecked] = useState(isAutoRefill);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={cn(cl.container, className)}>
      <div className={cl.left}>
        <div className={cl.infoGroup}>
          <b className={cl.infoTitle}>Доступно:</b>
          <strong className={cl.info}>{lessonCount} занятий</strong>
        </div>
        <div className={cl.infoGroup}>
          <b className={cl.infoTitle}>Ваш тариф:</b>
          <strong className={cl.info}>{tariffPlanFirst}</strong>
        </div>
        <div className={cl.infoGroup}>
          <b className={cl.infoTitle}>Ваш второй тариф:</b>
          <strong className={cl.info}>{tariffPlanSecond}</strong>
        </div>
        <Button
          className={cl.contractBtn}
          colorTheme={ButtonColorThemes.transparent}
          icon={<Image src={contractIcon} alt="contract icon" />}
        >
          Скачать договор
        </Button>
      </div>
      <div className={cl.right}>
        <div className={cl.balanceFundsContainer}>
          <b className={cl.balanceFundsTitle}>Средств на балансе:</b>
          <strong className={cl.balanceFunds}>{balanceFunds}₽</strong>
        </div>
        <Button className={cl.balancePayBtn} colorTheme={ButtonColorThemes.red}>
          Пополнить баланс
        </Button>
        <Button
          onClick={openModal}
          className={cl.changeTariffBtn}
          colorTheme={ButtonColorThemes.transparent}
        >
          Сменить тариф
        </Button>
        <SwitchButton
          label="Автопополнение"
          name="auto-replenishment"
          isChecked={isChecked}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Balance;
