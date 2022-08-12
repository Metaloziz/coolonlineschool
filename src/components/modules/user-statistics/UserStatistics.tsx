import React from 'react';

import { CardStudentCheckingHomework, Homeworks, StatisticsList } from '@components';
import { HOMEWORKS, STATISTICS_LIST, STUDENT_CHECKING_HOMEWORKS } from '@mock/index';

import styles from './UserStatistics.module.scss';

const UserStatistics = () => (
  <div className={styles.innerContent}>
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <CardStudentCheckingHomework
          className={styles.wrapperStudentCard}
          student={STUDENT_CHECKING_HOMEWORKS}
        />
        <Homeworks isOlympics className={styles.homeworksChecking} homeworks={HOMEWORKS} />
      </div>
      <div>
        <StatisticsList className={styles.keepPlaying} statisticsList={STATISTICS_LIST} />
      </div>
    </div>
  </div>
);

export default UserStatistics;
