import { FC } from 'react';

import { StudentStatuses } from '@app/enums';
import classNames from 'classnames';
import cl from 'src/components/elements/students-list/StudentsList.module.scss';

import StudentCard from './student-card/StudentCard';

interface IAchievement {
  id: string;
  title: string;
  imageUrl: string;
}

export interface IStudent {
  id: string;
  studentName: string;
  status: StudentStatuses;
  city?: string;
  pointsNumber?: number;
  achievements: IAchievement[];
  options: {
    isCheck?: boolean;
    isQuestion?: boolean;
    isCamera?: boolean;
  };
}

interface IStudentsList {
  className?: string;
  students: IStudent[];
}

const StudentsList: FC<IStudentsList> = ({ students, className }) => (
  <div className={classNames(cl.container, className)}>
    <div className={cl.wrapper}>
      {students.map(student => {
        const { isQuestion, isCamera, isCheck } = student.options;
        return (
          <StudentCard
            key={student.id}
            student={student}
            isQuestion={isQuestion}
            isCheck={isCheck}
            isCamera={isCamera}
          />
        );
      })}
    </div>
  </div>
);

export default StudentsList;
