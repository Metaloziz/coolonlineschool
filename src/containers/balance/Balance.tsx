import Image from 'next/image';
import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import { Button, SwitchButton } from '@components';
import contractIcon from '@svgs/button/contract-icon.svg';
import styles from './Balance.module.scss';

type Props = {
  lessonCount: number;
  ratePlanFirst: string;
  ratePlanSecond: string;
  balanceFunds: number;
};

const Balance: FC<Props> = ({
  balanceFunds,
  lessonCount,
  ratePlanFirst,
  ratePlanSecond,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.infoGroup}>
          <b className={styles.infoTitle}>Доступно:</b>
          <strong className={styles.info}>{lessonCount} занятий</strong>
        </div>
        <div className={styles.infoGroup}>
          <b className={styles.infoTitle}>Ваш тариф:</b>
          <strong className={styles.info}>{ratePlanFirst}</strong>
        </div>
        <div className={styles.infoGroup}>
          <b className={styles.infoTitle}>Ваш второй тариф:</b>
          <strong className={styles.info}>{ratePlanSecond}</strong>
        </div>
        <Button
          className={styles.contractBtn}
          text="Скачать договор"
          colorTheme={ButtonColorThemes.transparent}
          image={<Image src={contractIcon} alt="contract icon" />}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.balanceFundsContainer}>
          <b className={styles.balanceFundsTitle}>Средств на балансе:</b>
          <strong className={styles.balanceFunds}>{balanceFunds}₽</strong>
        </div>
        <Button
          className={styles.balancePayBtn}
          text="Пополнить баланс"
          colorTheme={ButtonColorThemes.red}
        />
        <Button
          className={styles.changeRateBtn}
          text="Сменить тариф"
          colorTheme={ButtonColorThemes.transparent}
        />
        <SwitchButton label="Автопополнение" name="auto-replenishment" />
      </div>
    </div>
  );
};

export default Balance;
