import { StudentStatuses } from '@app/enums';
import { IStudentCard } from '@app/types';
import { IStudent } from '@pages/class/studentsList/StudentsList';
import goodJobClass from '@svgs/studentsIcon/goodJobClass.svg';
import participationCompetitions from '@svgs/studentsIcon/participationCompetitions.svg';
import participationOlympiad from '@svgs/studentsIcon/participationOlympiad.svg';
import tenHomeworks from '@svgs/studentsIcon/tenHomeworks.svg';

export const STUDENT_CHECKING_HOMEWORKS: IStudentCard = {
  id: '1',
  studentName: 'Днепровский Александр Алексеевич',
  city: 'Москва',
  status: StudentStatuses.beginner,
  teacher: 'Евсеев Виктор Петрович',
};

export const STUDENTS: IStudent[] = [
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
