import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import calendarImage from '@svgs/calendar-icon.svg';
import cl from './CustomCalendar.module.scss';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className={cl.calendar}>
      <div
        className={cl.calendarImage}
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <Image src={calendarImage} alt="calendar" width={30} height={30} />
        <div className={cl.blockCalendar}>
          {showCalendar && (
            <Calendar
              className={cl.myCalendar}
              tileClassName={cl.titleCalendar}
              onChange={onChange}
              value={value}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
