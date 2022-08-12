import { Homeworks } from '@components';
import { StudentsList, GroupsList, SearchForm } from '@components/elements';
import { HOMEWORKS, STUDENTS } from '@mock/index';

import styles from './Class.module.scss';

const GROUPS = ['Группа 1А', 'Группа 1Б', 'Группа 1С', 'Группа 2А', 'Группа 2Б', 'Группа 2С'];

const Class = () => (
  <div className={styles.innerContent}>
    <SearchForm />

    <div className={styles.wrapperList}>
      <div className={styles.wrapperHomeworks}>
        <GroupsList groups={GROUPS} />
        <Homeworks isEdit className={styles.homeworks} homeworks={HOMEWORKS} />
      </div>

      <StudentsList className={styles.studentsList} students={STUDENTS} />
    </div>
  </div>
);

export default Class;
