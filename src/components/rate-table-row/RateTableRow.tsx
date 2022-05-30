import Image from 'next/image';
import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import { IRateTableRow } from '@app/types';
import { Button } from '@components/';
import chequeIcon from '@svgs/button/cheque-download-icon.svg';
import { convertToDateString } from '@utils/Date';
import { getRatePlanRus } from '@utils/RatePlans';
import cl from './RateTableRow.module.scss';

const RateTableRow: FC<IRateTableRow> = ({
  id,
  moneyAmount,
  description,
  paymentDate,
  ratePlan,
  status,
}) => {
  return (
    <div className={cl.container}>
      <span>{id}</span>
      <span>{moneyAmount}₽</span>
      <span className={cl.desc}>{description}</span>
      <span>{convertToDateString(paymentDate)}</span>
      <span>{getRatePlanRus(ratePlan)}</span>
      <span>{status === 'success' && 'Успех'}</span>
      <Button
        colorTheme={ButtonColorThemes.minimal}
        text="Скачать чек"
        image={<Image src={chequeIcon} alt="Скачать чек" />}
      />
    </div>
  );
};

export default RateTableRow;
