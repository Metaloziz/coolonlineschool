import { FC } from 'react';
import {
  RusTariffPlans,
  RusTariffStatus,
  TariffPlans,
  TariffStatus,
} from '@app/enums/Enums';
import { Table } from '@components';
import { convertToDateString } from '@utils/Date';
import cl from './StudentTariffsTable.module.scss';

interface IStudentTariffsRow {
  id: number;
  fullName: string;
  age: number;
  registrationDate: Date;
  tariffStartDate: Date;
  tariffEndDate: Date;
  tariffPlan: TariffPlans;
  paymentDate: Date;
  status: TariffStatus;
}

interface IStudentTariffsTable {
  rows: IStudentTariffsRow[];
  className?: string;
}

const formatRow = ({
  age,
  registrationDate,
  tariffStartDate,
  tariffEndDate,
  tariffPlan,
  paymentDate,
  status,
  ...cells
}: IStudentTariffsRow) => ({
  age: `${age} лет`,
  registrationDate: convertToDateString(registrationDate),
  tariffStartDate: convertToDateString(tariffStartDate),
  tariffEndDate: convertToDateString(tariffEndDate),
  tariffPlan: RusTariffPlans[tariffPlan],
  paymentDate: convertToDateString(paymentDate),
  status: RusTariffStatus[status],
  ...cells,
});

const getFormattedRows = (rows: IStudentTariffsRow[]) =>
  rows.map((row) => formatRow(row));

const StudentTariffsTable: FC<IStudentTariffsTable> = ({ rows }) => {
  return (
    <Table
      headers={[
        ['id', '№'],
        ['fullName', 'ФИО  ученика'],
        ['age', 'Возраст'],
        ['registrationDate', 'Дата регистрации'],
        ['tariffStartDate', 'Дата начала действия тарифа'],
        ['tariffEndDate', 'Дата окончания действия тарифа'],
        ['tariffPlan', 'Тариф'],
        ['paymentDate', 'Дата оплаты'],
        ['status', 'Статус'],
      ]}
      rows={getFormattedRows(rows)}
      gridClassName={cl.grid}
    />
  );
};

export default StudentTariffsTable;
