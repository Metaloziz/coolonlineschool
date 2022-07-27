import { FC } from 'react';

import { ButtonColorThemes, RusTariffPlans, TariffPlans } from '@app/enums';
import { Button, TariffPlanOptions } from '@components';
import cn from 'classnames';

import cl from './TariffPlan.module.scss';

interface ITariffPlan {
  tariffPlan: TariffPlans;
  className?: string;
}

const TariffPlan: FC<ITariffPlan> = ({ tariffPlan, className }) => (
  <div className={cn(cl.container, className)}>
    <strong className={cl.title}>{RusTariffPlans[tariffPlan]}</strong>
    <span className={cl.optionsTitle}>Вы получаете:</span>
    <TariffPlanOptions tariffPlan={tariffPlan} className={cl.options} />
    <Button className={cl.btn} colorTheme={ButtonColorThemes.red}>
      Перейти на тариф
    </Button>
  </div>
);

export default TariffPlan;
