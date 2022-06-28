import { FC } from 'react';
import { RusTeacherStatuses, TeacherStatuses } from '@app/enums';
import { Table } from '@components';
import { convertToDateString } from '@utils/Date';
import cl from './TeachersTable.module.scss';

interface ITeachersRow {
  id: number;
  fullName: string;
  lessonsAmount: number;
  registrationDate: Date;
  workedHoursAmount: number;
  childrenNumber: number;
  status: TeacherStatuses;
}

interface ITeachersTable {
  rows: ITeachersRow[];
  className?: string;
}

const formatRow = ({ registrationDate, status, ...cells }: ITeachersRow) => ({
  registrationDate: convertToDateString(registrationDate),
  status: RusTeacherStatuses[status],
  ...cells,
});

const getFormattedRows = (rows: ITeachersRow[]) =>
  rows.map((row) => formatRow(row));

const TeachersTable: FC<ITeachersTable> = ({ rows }) => {
  return (
    <Table
      headers={[
        ['id', '№'],
        ['fullName', 'ФИО учителя'],
        ['lessonsAmount', 'Сумма уроков'],
        ['registrationDate', 'Дата регистрации'],
        ['workedHoursAmount', 'Сумма отработанных часов'],
        ['childrenNumber', 'Сколько детей у учителя'],
        ['status', 'Статус'],
      ]}
      rows={getFormattedRows(rows)}
      gridClassName={cl.grid}
    />
  );
};

export default TeachersTable;
