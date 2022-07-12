import { StudentStatuses } from '@app/enums';
import { Homeworks } from '@components';
import { GroupsList } from '@pages/students/groupsList/GroupsList';
import { SearchForm } from '@pages/students/searchForm/SearchForm';
import StudentsList, { IStudent } from '@pages/students/studentsList/StudentsList';
import goodJobClass from '@svgs/studentsIcon/goodJobClass.svg';
import participationCompetitions from '@svgs/studentsIcon/participationCompetitions.svg';
import participationOlympiad from '@svgs/studentsIcon/participationOlympiad.svg';
import tenHomeworks from '@svgs/studentsIcon/tenHomeworks.svg';
import { getRandomId } from '@utils/RandomId';
import styles from 'src/pages/students/Students.module.scss';

const STUDENTS: IStudent[] = [
  {
    id: '1',
    studentName: 'Днепровский Александр Алексеевич',
    city: 'Москва',
    status: StudentStatuses.beginner,
    pointsNumber: 1,
    achievements: [
      { title: 'tenHomeworks', imageUrl: tenHomeworks },
      { title: 'participationOlympiad', imageUrl: participationCompetitions },
      { title: 'goodJobClass', imageUrl: goodJobClass },
      { title: 'participationCompetitions', imageUrl: participationOlympiad },
      { title: 'tenHomeworks', imageUrl: tenHomeworks },
      { title: 'participationOlympiad', imageUrl: participationCompetitions },
      { title: 'goodJobClass', imageUrl: goodJobClass },
      { title: 'participationCompetitions', imageUrl: participationOlympiad },
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
      { title: 'tenHomeworks', imageUrl: tenHomeworks },
      { title: 'participationOlympiad', imageUrl: participationCompetitions },
      { title: 'goodJobClass', imageUrl: goodJobClass },
      { title: 'participationCompetitions', imageUrl: participationOlympiad },
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
      <GroupsList groups={GROUPS} />
      <Homeworks isEdit className={styles.homeworks} homeworks={HOMEWORKS} />
      <StudentsList students={STUDENTS} />
    </div>
  </div>
);

export default IndexPage;
