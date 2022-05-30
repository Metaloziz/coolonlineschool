import classNames from 'classnames';
import { FC } from 'react';
import CustomCalendar from '@components/custom-calendar/CustomCalendar';
import cl from './TextFieldCalendar.module.scss';

const TextFieldCalendar: FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <div className={classNames(cl.container, className)}>
      <span className={cl.text}>{text}</span>
      <input className={cl.input} type={'text'} />
      <CustomCalendar />
    </div>
  );
};

export default TextFieldCalendar;
