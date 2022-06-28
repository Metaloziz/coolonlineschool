import { FC } from 'react';
import { ButtonColorThemes, RusTariffPlans, TariffPlans } from '@app/enums';
import { Button, TariffPlanOptions } from '@components';
import cl from './TariffPlan.module.scss';

interface ITariffPlan {
  tariffPlan: TariffPlans;
}

const TariffPlan: FC<ITariffPlan> = ({ tariffPlan }) => {
  return (
    <div className={cl.container}>
      <strong className={cl.title}>{RusTariffPlans[tariffPlan]}</strong>
      <span className={cl.optionsTitle}>Вы получаете:</span>
      <TariffPlanOptions tariffPlan={tariffPlan} className={cl.options} />
      <Button className={cl.btn} colorTheme={ButtonColorThemes.red}>
        Перейти на тариф
      </Button>
    </div>
  );
};

export default TariffPlan;
