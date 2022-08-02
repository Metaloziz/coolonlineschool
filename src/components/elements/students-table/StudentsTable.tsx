import { FC } from 'react';

import classNames from 'classnames';
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

const StudentsTable: FC<IStudentsTable> = ({ students, className }) => (
  <div className={classNames(cl.container, className)}>
    <div className={cl.tableBlock}>
      <div className={cl.header}>
        <span className={cl.fullNameTitle}>ФИО ученика</span>
        <span>Начало периода</span>
        <span>Конец периода</span>
        <span>Группа</span>
      </div>
      {students.map(({ fullName, studyPeriodBeginning, studyPeriodEnd, group, id }) => (
        <div key={id} className={cl.student}>
          <span className={cl.fullName}>{fullName}</span>
          <span>{studyPeriodBeginning}</span>
          <span>{studyPeriodEnd}</span>
          <span>{group}</span>
        </div>
      ))}
    </div>
  </div>
);

export default StudentsTable;