import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import { RateProps } from '@app/types/Props';
import { Button, RatePlanOptions } from '@components';
import { getRatePlanRus } from '@utils/RatePlans';
import styles from './RatePlan.module.scss';

const RatePlan: FC<RateProps> = ({ ratePlan }) => {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>{getRatePlanRus(ratePlan)}</strong>
      <span className={styles.optionsTitle}>Вы получаете:</span>
      <RatePlanOptions ratePlan={ratePlan} className={styles.options} />
      <Button
        className={styles.btn}
        text="Перейти на тариф"
        colorTheme={ButtonColorThemes.red}
      />
    </div>
  );
};

export default RatePlan;
