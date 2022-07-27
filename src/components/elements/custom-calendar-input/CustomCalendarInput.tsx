import { FC } from 'react';

import 'react-calendar/dist/Calendar.css';
import cn from 'classnames';
import cl from 'src/components/elements/custom-calendar-input/CustomCalendarInput.module.scss';
import CustomCalendar from 'src/components/elements/custom-calendar/CustomCalendar';
import TextField from 'src/components/elements/text-fild/TextFild';

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
