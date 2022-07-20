import { FC } from 'react';

import 'react-calendar/dist/Calendar.css';
import cn from 'classnames';

import CustomCalendar from '../custom-calendar/CustomCalendar';
import TextField from '../text-fild/TextFild';

import cl from './CustomCalendarInput.module.scss';

interface Props {
  classNameTextField?: string;
  className?: string;
}

const CustomCalendarInput: FC<Props> = ({ classNameTextField, className }) => (
  <div className={cn(cl.calendarInput, className)}>
    <TextField className={classNameTextField} />
    <CustomCalendar />
  </div>
);

export default CustomCalendarInput;
