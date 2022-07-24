import { Homeworks } from '@components';
import { HOMEWORKS, STUDENTS } from '@mock/index';
import { GroupsList } from '@pages/students/groups-list/GroupsList';
import { SearchForm } from '@pages/students/search-form/SearchForm';
import StudentsList from '@pages/students/studentsList/StudentsList';

import styles from './Students.module.scss';

const GROUPS = ['Группа 1А', 'Группа 1Б', 'Группа 1С', 'Группа 2А', 'Группа 2Б', 'Группа 2С'];

const IndexPage = () => (
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

export default IndexPage;
