import classNames from 'classnames';
import { FC } from 'react';
import { TableProps } from '@app/types/Props';
import styles from './Table.module.scss';

const Table: FC<TableProps> = ({ students, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.header}>
        <span className={styles.fullNameTitle}>ФИО ученика</span>
        <span>Начало периода</span>
        <span>Конец периода</span>
        <span>Группа</span>
      </div>
      {students.map(
        ({ fullName, studyPeriodBeginning, studyPeriodEnd, group, id }) => (
          <div key={id} className={styles.student}>
            <span className={styles.fullName}>{fullName}</span>
            <span>{studyPeriodBeginning}</span>
            <span>{studyPeriodEnd}</span>
            <span>{group}</span>
          </div>
        ),
      )}
    </div>
  );
};

export default Table;
