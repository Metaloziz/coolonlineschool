import { FC } from 'react';
import { LessonsTypes } from '@app/enums';
import { ISchedule } from '@app/types';
import { ScheduleGrid, ScheduleLessonsList } from '@components';

const Schedule: FC<ISchedule> = ({ searchedDate, className }) => {
  let day = searchedDate.getDay();
  if (day === 0) {
    day = 7;
  }

  const date = searchedDate.getDate();
  const mondayDate = new Date(searchedDate);
  mondayDate.setDate(date - (day - 1));

  return (
    <ScheduleGrid className={className} mondayDate={mondayDate}>
      <ScheduleLessonsList
        mondayDate={mondayDate}
        lessonsList={[
          {
            gradeNumber: 1,
            lessonNumber: 1,
            lessonStartDateTime: new Date(0, 0, 1, 8, 30),
            type: LessonsTypes.mentalArithmetic,
            zoomlink: '',
          },
          {
            gradeNumber: 1,
            lessonNumber: 2,
            lessonStartDateTime: new Date(0, 0, 2, 9),
            type: LessonsTypes.speedReading,
            zoomlink: '',
          },
          {
            gradeNumber: 2,
            lessonNumber: 1,
            lessonStartDateTime: new Date(0, 0, 3, 10, 30),
            type: LessonsTypes.mentalArithmetic,
            zoomlink: '',
          },
          {
            gradeNumber: 2,
            lessonNumber: 2,
            lessonStartDateTime: new Date(0, 0, 4, 11),
            type: LessonsTypes.speedReading,
            zoomlink: '',
          },
          {
            gradeNumber: 3,
            lessonNumber: 3,
            lessonStartDateTime: new Date(0, 0, 5, 12, 30),
            type: LessonsTypes.mentalArithmetic,
            zoomlink: '',
          },
          {
            gradeNumber: 4,
            lessonNumber: 4,
            lessonStartDateTime: new Date(0, 0, 6, 13),
            type: LessonsTypes.mentalArithmetic,
            zoomlink: '',
          },
          {
            gradeNumber: 4,
            lessonNumber: 7,
            lessonStartDateTime: new Date(0, 0, 7, 14, 30),
            type: LessonsTypes.speedReading,
            zoomlink: '',
          },
          {
            gradeNumber: 5,
            lessonNumber: 5,
            lessonStartDateTime: new Date(0, 0, 6, 15, 30),
            type: LessonsTypes.mentalArithmetic,
            zoomlink: '',
          },
          {
            gradeNumber: 6,
            lessonNumber: 7,
            lessonStartDateTime: new Date(0, 0, 5, 16),
            type: LessonsTypes.speedReading,
            zoomlink: '',
          },
          {
            gradeNumber: 7,
            lessonNumber: 7,
            lessonStartDateTime: new Date(0, 0, 4, 17),
            type: LessonsTypes.mentalArithmetic,
            zoomlink: '',
          },
          {
            gradeNumber: 10,
            lessonNumber: 7,
            lessonStartDateTime: new Date(0, 0, 3, 18),
            type: LessonsTypes.speedReading,
            zoomlink: '',
          },
        ]}
      />
    </ScheduleGrid>
  );
};

export default Schedule;
