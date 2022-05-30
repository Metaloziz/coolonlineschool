import classNames from 'classnames';
import { FC } from 'react';
import { ButtonColorThemes, RatePlans } from '@app/enums/Enums';
import { IRateCard } from '@app/types';
import { RatePlanOptions, Button } from '@components';
import { getRatePlanRus } from '@utils/RatePlans';
import cl from './RateCard.module.scss';

const RateCard: FC<IRateCard> = ({
  moneyAmount,
  ratePlan,
  percentDiscount,
  isExtraOption,
}) => {
  const { advanced, personal } = RatePlans;

  return (
    <div className={classNames(cl.container, cl[ratePlan])}>
      <div className={cl.titleContainer}>
        <strong>{getRatePlanRus(ratePlan)}</strong>
        {percentDiscount && (
          <div className={cl.discountContainer}>
            <span className={cl.discount}>{percentDiscount}%</span>
          </div>
        )}
      </div>
      <RatePlanOptions
        isExtraOption={isExtraOption}
        className={cl.options}
        extraOptionClassName={cl.extraOption}
        ratePlan={ratePlan}
      />
      {(ratePlan === advanced || ratePlan === personal) && (
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
      <Button
        className={cl.btn}
        colorTheme={ButtonColorThemes.yellow}
        text="Попробовать"
      />
    </div>
  );
};

export default RateCard;
