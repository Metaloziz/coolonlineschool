import { FC } from 'react';

import { appStore, Roles } from '@app/store';
import { Routes } from '@constants/Routes';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import cl from 'src/components/elements/students-table/StudentsTable.module.scss';

interface ITableStudentRow {
  fullName: string;
  studyPeriodBeginning: string;
  studyPeriodEnd: string;
  group: number;
  id: number;
}

interface IStudentsTable {
  students: ITableStudentRow[];
  className?: string;
}

const StudentsTable: FC<IStudentsTable> = ({ students, className }) => {
  const { role } = appStore;
  const { push } = useRouter();
  const { UserStatistics } = Routes;

  const onStatisticsUserClick = (id: number) => {
    push({
      pathname: UserStatistics,
      query: { userId: id },
    });
  };

  return (
    <div className={classNames(cl.container, className)}>
      <div className={cl.tableBlock}>
        <div className={cl.header}>
          <span className={cl.fullNameTitle}>ФИО ученика</span>
          <span>Начало периода</span>
          <span>Конец периода</span>
          <span>Группа</span>
        </div>
        {students.map(({ fullName, studyPeriodBeginning, studyPeriodEnd, group, id }) => (
          <div
            key={id}
            className={cl.student}
            onClick={role === Roles.Admin ? () => onStatisticsUserClick(id) : undefined}
          >
            <span className={cl.fullName}>{fullName}</span>
            <span>{studyPeriodBeginning}</span>
            <span>{studyPeriodEnd}</span>
            <span>{group}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StudentsTable;
