import { useState, FC, useRef, useEffect, useCallback } from 'react';

import calendarImage from '@svgs/calendar-icon.svg';
import cn from 'classnames';
import moment from 'moment';
import Image from 'next/image';
import Calendar from 'react-calendar';
import cl from 'src/components/elements/custom-calendar/CustomCalendar.module.scss';
import 'react-calendar/dist/Calendar.css';

type TCustomCalendar = {
  onCustomChange?: (value: string) => void;
};

const CustomCalendar: FC<TCustomCalendar> = ({ onCustomChange }) => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const ref = useRef(null);
  const buttonRef = useRef(null);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (
        !(ref.current! as any).contains(e.target) &&
        !(buttonRef.current! as any).contains(e.target) &&
        showCalendar
      ) {
        setShowCalendar(false);
      }
    },
    [ref.current, showCalendar],
  );

  useEffect(() => {
    document.addEventListener('click', clickListener, true);
    return () => {
      document.removeEventListener('click', clickListener, true);
    };
  }, [clickListener]);

  const handleChange = (newDate: Date) => {
    const title = `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;

    setDate(newDate);
    onCustomChange &&
      onCustomChange(title === '' ? '' : moment(title, 'D.M.YYYY').format('DD.MM.YYYY'));
    setShowCalendar(false);
  };

  return (
    <div className={cl.calendar}>
      <div className={cl.calendarImage}>
        <div ref={buttonRef} onClick={() => setShowCalendar(!showCalendar)}>
          <Image src={calendarImage} alt="calendar" width={30} height={30} />
        </div>

        <div className={cl.blockCalendar} ref={ref}>
          <Calendar
            className={cn(cl.myCalendar, {
              [cl.showCalendar]: !showCalendar,
            })}
            tileClassName={cl.titleCalendar}
            onChange={handleChange}
            value={date}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
