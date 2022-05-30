import Image from 'next/image';
import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import { Button, SwitchButton } from '@components';
import contractIcon from '@svgs/button/contract-icon.svg';
import cl from './Balance.module.scss';

interface IBalance {
  lessonCount: number;
  ratePlanFirst: string;
  ratePlanSecond: string;
  balanceFunds: number;
  openModal: () => void;
}

const Balance: FC<IBalance> = ({
  balanceFunds,
  lessonCount,
  ratePlanFirst,
  ratePlanSecond,
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
          <strong className={cl.info}>{ratePlanFirst}</strong>
        </div>
        <div className={cl.infoGroup}>
          <b className={cl.infoTitle}>Ваш второй тариф:</b>
          <strong className={cl.info}>{ratePlanSecond}</strong>
        </div>
        <Button
          className={cl.contractBtn}
          text="Скачать договор"
          colorTheme={ButtonColorThemes.transparent}
          image={<Image src={contractIcon} alt="contract icon" />}
        />
      </div>
      <div className={cl.right}>
        <div className={cl.balanceFundsContainer}>
          <b className={cl.balanceFundsTitle}>Средств на балансе:</b>
          <strong className={cl.balanceFunds}>{balanceFunds}₽</strong>
        </div>
        <Button
          className={cl.balancePayBtn}
          text="Пополнить баланс"
          colorTheme={ButtonColorThemes.red}
        />
        <Button
          onClick={openModal}
          className={cl.changeRateBtn}
          text="Сменить тариф"
          colorTheme={ButtonColorThemes.transparent}
        />
        <SwitchButton label="Автопополнение" name="auto-replenishment" />
      </div>
    </div>
  );
};

export default Balance;
