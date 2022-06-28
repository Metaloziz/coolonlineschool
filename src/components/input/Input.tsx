import classNames from 'classnames';
import { FC, InputHTMLAttributes } from 'react';
import { getRandomId } from '@utils/RandomId';
import cl from './Input.module.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  className?: string;
}

const Input: FC<IInput> = ({
  labelText,
  type = 'text',
  className,
  ...attrs
}) => {
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
      />
    </div>
  );
};

export default Input;
