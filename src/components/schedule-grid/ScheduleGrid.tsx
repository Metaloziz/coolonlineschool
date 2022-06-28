import classNames from 'classnames';
import { FC } from 'react';
import { ScheduleLessonsList } from '@components';
import { convertToDateString, convertToTimeString } from '@utils/Date';
import cl from './ScheduleGrid.module.scss';

interface IScheduleGrid {
  mondayDate: Date;
  children: ReturnType<typeof ScheduleLessonsList>;
  className?: string;
}

const getWeekDates = (mondayDateObj: Date): Date[] => {
  const year = mondayDateObj.getFullYear();
  const month = mondayDateObj.getMonth();
  const mondayDate = mondayDateObj.getDate();

  const weekDates = Array(7)
    .fill(null)
    .map((_value, key) => new Date(year, month, mondayDate + key));

  return weekDates;
};

const ScheduleGrid: FC<IScheduleGrid> = ({
  mondayDate,
  children,
  className,
}) => {
  return (
    <div className={classNames(cl.container, className)}>
      <div className={cl.timeIntervals}>
        {Array(24)
          .fill(null)
          .map((_value, key) => (
            <span key={key} className={cl.halfHour}>
              {convertToTimeString(
                key !== 23
                  ? new Date(0, 0, 0, 8, key * 30)
                  : new Date(0, 0, 0, 20),
              )}
            </span>
          ))}
      </div>
      <div className={cl.grid}>
        <div className={classNames(cl.rowHeader, cl.row)}>
          {getWeekDates(mondayDate).map((date) => (
            <div
              key={date.valueOf()}
              className={classNames(cl.headerCell, cl.cell)}
            >
              {convertToDateString(date)}
            </div>
          ))}
        </div>
        {Array(24)
          .fill(null)
          .map((_value, key) => (
            <div key={key} className={cl.row}>
              {Array(7)
                .fill(null)
                .map((_value, key) => (
                  <div key={key} className={cl.cell}></div>
                ))}
            </div>
          ))}
        {children}
      </div>
    </div>
  );
};

export default ScheduleGrid;
