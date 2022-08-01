import { FC, forwardRef, memo, RefAttributes } from 'react';

import { getRandomId } from '@utils/RandomId';
import classNames from 'classnames';
import cl from 'src/components/elements/input/Input.module.scss';

interface IInput extends RefAttributes<HTMLInputElement> {
  labelText?: string;
  className?: string;
  placeholder?: string;
  type?: string;
  id?: string;
}

const Input: FC<IInput> = memo(
  forwardRef(({ labelText, type = 'text', className, placeholder, id, ...attrs }, ref) => {
    const inputId = String(getRandomId());

    return (
      <div className={cl.container}>
        <label htmlFor={inputId} className={cl.label}>
          {labelText}
        </label>
        <input
          {...attrs}
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
