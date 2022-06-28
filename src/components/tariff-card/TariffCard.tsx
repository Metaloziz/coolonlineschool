import classNames from 'classnames';
import { FC } from 'react';
import { ButtonColorThemes, RusTariffPlans, TariffPlans } from '@app/enums';
import { ITariffCard } from '@app/types';
import { TariffPlanOptions, Button } from '@components';
import cl from './TariffCard.module.scss';

const TariffCard: FC<ITariffCard> = ({
  moneyAmount,
  tariffPlan,
  percentDiscount,
  isExtraOption,
}) => {
  const { advanced, personal } = TariffPlans;

  return (
    <div className={classNames(cl.container, cl[tariffPlan])}>
      <div className={cl.titleContainer}>
        <strong>{RusTariffPlans[tariffPlan]}</strong>
        {percentDiscount && (
          <div className={cl.discountContainer}>
            <span className={cl.discount}>{percentDiscount}%</span>
          </div>
        )}
      </div>
      <TariffPlanOptions
        isExtraOption={isExtraOption}
        className={cl.options}
        extraOptionClassName={cl.extraOption}
        tariffPlan={tariffPlan}
      />
      {(tariffPlan === advanced || tariffPlan === personal) && (
        <div className={cl.extraOptionVisualiser}>+</div>
      )}
      {percentDiscount ? (
        <div className={cl.moneyAmountContainer}>
          <strong className={cl.moneyAmountOld}>{moneyAmount}₽</strong>
          <strong className={cl.moneyAmount}>
            {Math.floor(moneyAmount * (percentDiscount / 100))}₽
          </strong>
        </div>
      ) : (
        <strong className={cl.moneyAmount}>{moneyAmount}₽</strong>
      )}
      <Button className={cl.btn} colorTheme={ButtonColorThemes.yellow}>
        Попробовать
      </Button>
    </div>
  );
};

export default TariffCard;
