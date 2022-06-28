import Image from 'next/image';
import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums';
import { Button, SwitchButton } from '@components';
import contractIcon from '@svgs/button/contract-icon.svg';
import cl from './Balance.module.scss';

interface IBalance {
  lessonCount: number;
  tariffPlanFirst: string;
  tariffPlanSecond: string;
  balanceFunds: number;
  openModal: () => void;
}

const Balance: FC<IBalance> = ({
  balanceFunds,
  lessonCount,
  tariffPlanFirst,
  tariffPlanSecond,
  openModal,
}) => {
  return (
    <div className={cl.container}>
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
        <SwitchButton label="Автопополнение" name="auto-replenishment" />
      </div>
    </div>
  );
};

export default Balance;
