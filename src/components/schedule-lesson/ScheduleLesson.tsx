import classNames from 'classnames';
import { FC } from 'react';
import { ButtonColorThemes, IconVariants } from '@app/enums';
import { IScheduleLesson } from '@app/types';
import { Button, IconButton } from '@components';
import { IconSvg } from '@components/svg';
import { convertToTimeString } from '@utils/Date';
import cl from './ScheduleLesson.module.scss';

const ScheduleLesson: FC<IScheduleLesson> = ({
  type,
  gradeNumber,
  lessonNumber,
  lessonStartDateTime: startDateTime,
  zoomlink,
  mondayDate,
}) => {
  const [startHours, startMinutes, startDate] = [
    startDateTime.getHours(),
    startDateTime.getMinutes(),
    startDateTime.getDate(),
  ];

  const lessonEndDateTime = new Date(startDateTime);
  lessonEndDateTime.setHours(startHours + 1);

  let top = (startHours - 7) * 86;
  top += startMinutes === 30 ? 43 : 0;

  const dateOffset = startDate - mondayDate.getDate();
  const left = dateOffset * 230 + dateOffset;

  return (
    <div className={classNames(cl.container, cl[type])} style={{ top, left }}>
      <div className={cl.left}>
        <span>
          Класс: {gradeNumber}
          <br /> Урок: {lessonNumber}
          <br /> Время: {convertToTimeString(startDateTime)}
          {' - '}
          {convertToTimeString(lessonEndDateTime)}
        </span>
      </div>
      <div className={cl.right}>
        <IconButton
          iconAttrs={{
            width: 14,
            height: 18,
            fill: 'white',
            icon: IconVariants.delete,
          }}
        />
        <IconButton
          iconAttrs={{
            width: 16,
            height: 17,
            fill: 'white',
            icon: IconVariants.edit,
          }}
        />
        <Button
          onClick={() => {
            console.log(zoomlink);
          }}
          colorTheme={ButtonColorThemes.white}
          className={cl.zoomBtn}
          icon={<IconSvg icon={IconVariants.zoom} />}
        >
          ZOOM
        </Button>
      </div>
    </div>
  );
};

export default ScheduleLesson;
