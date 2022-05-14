import classNames from 'classnames';
import { FC } from 'react';
import { RatesTableProps } from '@app/types/Props';
import { RateTableRow } from '@components';
import styles from './RatesTable.module.scss';

const RatesTable: FC<RatesTableProps> = ({ rates, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.rowHeader}>
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
