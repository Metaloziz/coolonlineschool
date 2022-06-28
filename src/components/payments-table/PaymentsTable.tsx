import Image from 'next/image';
import { FC } from 'react';
import {
  ButtonColorThemes,
  PaymentStatuses,
  TariffPlans,
  RusPaymentStatuses,
  RusTariffPlans,
} from '@app/enums';
import { Button, Table } from '@components';
import chequeIcon from '@svgs/button/cheque-download-icon.svg';
import { convertToDateString } from '@utils/Date';
import cl from './PaymentsTable.module.scss';

interface IPaymentsRow {
  id: number;
  moneyAmount: number;
  description: string;
  paymentDate: Date;
  tariffPlan: TariffPlans;
  status: PaymentStatuses;
  chequeLink: string;
}

interface IPaymentsTable {
  rows: IPaymentsRow[];
  className?: string;
}

const formatRow = ({
  moneyAmount,
  paymentDate,
  tariffPlan,
  status,
  chequeLink,
  ...cells
}: IPaymentsRow) => ({
  moneyAmount: `${moneyAmount}₽`,
  paymentDate: convertToDateString(paymentDate),
  tariffPlan: RusTariffPlans[tariffPlan],
  status: RusPaymentStatuses[status],
  chequeLink: (
    <Button
      onClick={() => {
        console.log(chequeLink);
      }}
      colorTheme={ButtonColorThemes.minimal}
      icon={<Image src={chequeIcon} alt="Скачать чек" />}
    >
      Скачать чек
    </Button>
  ),
  ...cells,
});

const getFormattedRows = (rows: IPaymentsRow[]) =>
  rows.map((row) => formatRow(row));

const PaymentsTable: FC<IPaymentsTable> = ({ rows, className = '' }) => {
  return (
    <Table
      headers={[
        ['id', 'ID'],
        ['moneyAmount', 'Сумма'],
        ['description', 'Описание'],
        ['paymentDate', 'Дата оплаты'],
        ['tariffPlan', 'Тариф'],
        ['status', 'Статус'],
        ['chequeLink', 'Чек'],
      ]}
      rows={getFormattedRows(rows)}
      className={className}
      gridClassName={cl.grid}
    />
  );
};

export default PaymentsTable;
