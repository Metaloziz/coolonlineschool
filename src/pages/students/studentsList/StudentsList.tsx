import classNames from 'classnames';
import { FC } from 'react';
import { StudentStatuses } from '@app/enums';
import StudentCard from '@pages/students/studentsList/studentCard/StudentCard';
import cl from 'src/pages/students/studentsList/StudentsList.module.scss';

interface IAchievement {
  title: string;
  imageUrl: string;
}

export interface IStudent {
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

const StudentsList: FC<IStudentsList> = ({ students, className }) => {
  return (
    <div className={classNames(cl.container, className)}>
      <div className={cl.homeworks}>
        {students.map((student, index) => {
          const { isQuestion, isCamera, isCheck } = student.options;
          return (
            <StudentCard
              key={student.studentName + index}
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
};

export default StudentsList;
