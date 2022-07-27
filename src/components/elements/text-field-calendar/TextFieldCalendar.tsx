import { FC } from 'react';

import { CustomCalendar, Input } from '@components';
import classNames from 'classnames';
import cl from 'src/components/elements/text-field-calendar/TextFieldCalendar.module.scss';

const TextFieldCalendar: FC<{ text?: string; className?: string }> = ({ text, className }) => (
  <div className={classNames(cl.container, className)}>
    <Input className={cl.input} labelText={text || ''} />
    <CustomCalendar />
  </div>
);

export default TextFieldCalendar;
