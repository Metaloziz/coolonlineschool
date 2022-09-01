import { FC, FocusEventHandler, forwardRef, memo, RefAttributes } from 'react';

import { getRandomId } from '@utils/RandomId';
import classNames from 'classnames';
import cl from 'src/components/elements/input/Input.module.scss';

interface IInput extends RefAttributes<HTMLInputElement> {
  labelText?: string;
  className?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const Input: FC<IInput> = memo(
  forwardRef(({ labelText, type = 'text', onBlur, className, placeholder, id, ...attrs }, ref) => {
    const inputId = String(getRandomId());

    return (
      <div className={cl.container}>
        <label htmlFor={inputId} className={cl.label}>
          {labelText}
        </label>
        <input
          {...attrs}
          onBlur={onBlur}
          id={inputId}
          type={type}
          className={classNames(cl.input, className)}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    );
  }),
);

export default Input;
