import { FC } from 'react';

import {
  ButtonColorThemes,
  PaymentStatuses,
  TariffPlans,
  RusPaymentStatuses,
  RusTariffPlans,
} from '@app/enums';
import { Button, Table } from '@components';
import setting from '@svgs/settings.svg';
import { convertToDateString } from '@utils/Date';
import Image from 'next/image';

import cl from './RateTable.module.scss';

interface IRateRow {
  nameTariff: TariffPlans;
  price: number;
  dateStartAction: Date;
  dateEndAction: Date;
  status: PaymentStatuses;
  settingLink: string;
}

interface IPaymentsTable {
  rows: IRateRow[];
  className?: string;
}

const formatRow = ({
  nameTariff,
  price,
  dateStartAction,
  dateEndAction,
  status,
  settingLink,
  ...cells
}: IRateRow) => ({
  price: `${price}₽`,
  dateStartAction: convertToDateString(dateStartAction),
  dateEndAction: convertToDateString(dateEndAction),
  nameTariff: RusTariffPlans[nameTariff],
  status: RusPaymentStatuses[status],
  settingLink: (
    <Button
      onClick={() => {
        console.log(settingLink);
      }}
      colorTheme={ButtonColorThemes.minimal}
      icon={<Image src={setting} alt="Настройки" />}
    />
  ),
  ...cells,
});

const getFormattedRows = (rows: IRateRow[]) => rows.map(row => formatRow(row));

const RateTable: FC<IPaymentsTable> = ({ rows, className = '' }) => (
  <div className={cl.tableBlock}>
    <Table
      headers={[
        ['nameTariff', 'Название тарифа'],
        ['price', 'Стоимость'],
        ['dateStartAction', 'Дата начала действия'],
        ['dateEndAction', 'Дата окончания действия'],
        ['status', 'Статус'],
        ['settingLink', ''],
      ]}
      rows={getFormattedRows(rows)}
      className={className}
      gridClassName={cl.grid}
    />
  </div>
);

export default RateTable;
