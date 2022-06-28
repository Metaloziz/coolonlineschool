import { FC } from 'react';
import { IScheduleLesson } from '@app/types';
import { ScheduleLesson } from '@components';

interface IScheduleLessonsList {
  lessonsList: Omit<IScheduleLesson, 'mondayDate'>[];
  mondayDate: Date;
}

const ScheduleLessonsList: FC<IScheduleLessonsList> = ({
  lessonsList,
  mondayDate,
}) => {
  return (
    <>
      {lessonsList.map((lesson) => (
        <ScheduleLesson
          key={lesson.lessonStartDateTime.valueOf()}
          {...lesson}
          mondayDate={mondayDate}
        />
      ))}
    </>
  );
};

export default ScheduleLessonsList;
