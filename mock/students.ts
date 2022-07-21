import { StudentStatuses } from '@app/enums';
import { IStudentCard } from '@app/types';

export const STUDENT_CHECKING_HOMEWORKS: IStudentCard = {
  id: '1',
  studentName: 'Днепровский Александр Алексеевич',
  city: 'Москва',
  status: StudentStatuses.beginner,
  teacher: 'Евсеев Виктор Петрович',
};
