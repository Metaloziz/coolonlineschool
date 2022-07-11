import { FC } from 'react';

import 'react-calendar/dist/Calendar.css';
import CustomCalendar from '../custom-calendar/CustomCalendar';
import TextField from '../text-fild/TextFild';

import cl from './CustomCalendarInput.module.scss';

interface Props {
  classNameTextField?: string;
}

const CustomCalendarInput: FC<Props> = ({ classNameTextField }) => (
  <div className={cl.calendarInput}>
    <TextField className={classNameTextField} />
    <CustomCalendar />
  </div>
);

export default CustomCalendarInput;
