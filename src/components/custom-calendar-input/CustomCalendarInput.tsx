import { FC } from 'react';
import cl from './CustomCalendarInput.module.scss';
import 'react-calendar/dist/Calendar.css';
import CustomCalendar from '../custom-calendar/CustomCalendar';
import TextField from '../text-fild/TextFild';

interface Props {
  classNameTextField?: string;
}

const CustomCalendarInput: FC<Props> = ({ classNameTextField }) => {
  return (
    <div className={cl.calendarInput}>
      <TextField className={classNameTextField} />
      <CustomCalendar />
    </div>
  );
};

export default CustomCalendarInput;
