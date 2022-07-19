import { FC } from 'react';

import cl from './TextFieldCalendar.module.scss';

import { Input } from '@components';
import CustomCalendar from '@components/custom-calendar/CustomCalendar';
import classNames from 'classnames';



const TextFieldCalendar: FC<{ text?: string; className?: string }> = ({ text, className }) => (
  <div className={classNames(cl.container, className)}>
    <Input className={cl.input} labelText={text ? text : ""} />
    <CustomCalendar />
  </div>
);

export default TextFieldCalendar;
