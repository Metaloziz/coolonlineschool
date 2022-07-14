import { StudentStatuses } from '@app/enums';
import { Homeworks } from '@components';
import { GroupsList } from '@pages/students/groups-list/GroupsList';
import { SearchForm } from '@pages/students/search-form/SearchForm';
import StudentsList, { IStudent } from '@pages/students/studentsList/StudentsList';
import goodJobClass from '@svgs/studentsIcon/goodJobClass.svg';
import participationCompetitions from '@svgs/studentsIcon/participationCompetitions.svg';
import participationOlympiad from '@svgs/studentsIcon/participationOlympiad.svg';
import tenHomeworks from '@svgs/studentsIcon/tenHomeworks.svg';
import { getRandomId } from '@utils/RandomId';

import styles from './Students.module.scss';

const STUDENTS: IStudent[] = [
  {
    id: '1',
    studentName: 'Днепровский Александр Алексеевич',
    city: 'Москва',
    status: StudentStatuses.beginner,
    pointsNumber: 1,
    achievements: [
      { id: '1', title: 'tenHomeworks', imageUrl: tenHomeworks },
      { id: '2', title: 'participationOlympiad', imageUrl: participationCompetitions },
      { id: '3', title: 'goodJobClass', imageUrl: goodJobClass },
      { id: '4', title: 'participationCompetitions', imageUrl: participationOlympiad },
      { id: '5', title: 'tenHomeworks', imageUrl: tenHomeworks },
      { id: '6', title: 'participationOlympiad', imageUrl: participationCompetitions },
      { id: '7', title: 'goodJobClass', imageUrl: goodJobClass },
      { id: '8', title: 'participationCompetitions', imageUrl: participationOlympiad },
    ],
    options: {
      isCheck: true,
      isQuestion: true,
      isCamera: true,
    },
  },
  {
    id: '2',
    studentName: 'Днепровский Александр Алексеевич',
    city: 'Москва',
    status: StudentStatuses.beginner,
    pointsNumber: 1,
    achievements: [
      { id: '1', title: 'tenHomeworks', imageUrl: tenHomeworks },
      { id: '2', title: 'participationOlympiad', imageUrl: participationCompetitions },
      { id: '3', title: 'goodJobClass', imageUrl: goodJobClass },
      { id: '4', title: 'participationCompetitions', imageUrl: participationOlympiad },
    ],
    options: {
      isQuestion: false,
      isCamera: false,
    },
  },
  {
    id: '3',
    studentName: 'Днепровский Александр Алексеевич',
    city: 'Москва',
    status: StudentStatuses.beginner,
    pointsNumber: 1,
    achievements: [],
    options: {},
  },
];
const HOMEWORKS = [
  {
    gameTitle: 'Память и ритм',
    id: getRandomId(),
    description: {
      needToDo: '',
      minutesLeft: 10,
      tips: [
        {
          text: '1',
          id: getRandomId(),
        },
        {
          text: '2',
          id: getRandomId(),
        },
        {
          text: '3',
          id: getRandomId(),
        },
      ],
    },
  },
  {
    gameTitle: 'Число - фигура - слово',
    id: getRandomId(),
    description: {
      needToDo: 'Присесть 1070 раз и сделать 1200 отжиманий',
      minutesLeft: 120,
      tips: [
        {
          text: 'test',
          id: getRandomId(),
        },
        {
          text: 'test2',
          id: getRandomId(),
        },
        {
          text: 'test3',
          id: getRandomId(),
        },
      ],
    },
  },
];

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
