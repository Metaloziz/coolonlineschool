import { FC } from 'react';

import { CustomCalendar, Input } from '@components';
import classNames from 'classnames';
import cl from 'src/components/elements/text-field-calendar/TextFieldCalendar.module.scss';

const TextFieldCalendar: FC<{ text?: string; className?: string; placeholder?: string }> = ({
  text,
  className,
  placeholder,
}) => (
  <div className={classNames(cl.container, className)}>
    <Input className={cl.input} labelText={text || ''} placeholder={placeholder} />
    <CustomCalendar />
  </div>
);

export default TextFieldCalendar;
