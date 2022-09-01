import { FC, FocusEventHandler } from 'react';

import { CustomCalendar, Input } from '@components';
import classNames from 'classnames';
import cl from 'src/components/elements/text-field-calendar/TextFieldCalendar.module.scss';

interface Props {
  isDoubleInput?: boolean;
  text?: string;
  className?: string;
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const TextFieldCalendar: FC<Props> = ({ isDoubleInput, text, onBlur, className, placeholder }) => (
  <div className={classNames(cl.container, className)}>
    {isDoubleInput && (
      <Input
        onBlur={onBlur}
        className={cl.input}
        labelText={text || ''}
        placeholder={placeholder}
      />
    )}
    <Input onBlur={onBlur} className={cl.input} labelText={text || ''} placeholder={placeholder} />
    <CustomCalendar />
  </div>
);

export default TextFieldCalendar;
