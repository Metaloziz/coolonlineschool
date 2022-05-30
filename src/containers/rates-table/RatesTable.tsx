import classNames from 'classnames';
import { FC } from 'react';
import { IRateTableRow } from '@app/types';
import { RateTableRow } from '@components';
import cl from './RatesTable.module.scss';

interface IRatesTable {
  rates: IRateTableRow[];
  className?: string;
}

const RatesTable: FC<IRatesTable> = ({ rates, className }) => {
  return (
    <div className={classNames(cl.container, className)}>
      <div className={cl.rowHeader}>
        <span>ID</span>
        <span>Сумма</span>
        <span>Описание</span>
        <span>Дата оплаты</span>
        <span>Тариф</span>
        <span>Статус</span>
        <span>Чек</span>
      </div>
      {rates.map((rate) => (
        <RateTableRow key={rate.id} {...rate} />
      ))}
    </div>
  );
};

export default RatesTable;
