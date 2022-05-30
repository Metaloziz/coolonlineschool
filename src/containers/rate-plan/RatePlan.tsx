import { FC } from 'react';
import { ButtonColorThemes, RatePlans } from '@app/enums/Enums';
import { Button, RatePlanOptions } from '@components';
import { getRatePlanRus } from '@utils/RatePlans';
import cl from './RatePlan.module.scss';

interface IRatePlan {
  ratePlan: RatePlans;
}

const RatePlan: FC<IRatePlan> = ({ ratePlan }) => {
  return (
    <div className={cl.container}>
      <strong className={cl.title}>{getRatePlanRus(ratePlan)}</strong>
      <span className={cl.optionsTitle}>Вы получаете:</span>
      <RatePlanOptions ratePlan={ratePlan} className={cl.options} />
      <Button
        className={cl.btn}
        text="Перейти на тариф"
        colorTheme={ButtonColorThemes.red}
      />
    </div>
  );
};

export default RatePlan;
