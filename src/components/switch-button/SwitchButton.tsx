import classNames from 'classnames';
import { FC, InputHTMLAttributes } from 'react';
import cl from './SwitchButton.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isChecked?: boolean;
  name: string;
}

const SwitchButton: FC<Props> = ({ label, isChecked = true, name }) => {
  return (
    <div className={classNames(cl.container, { [cl.switchOn]: isChecked })}>
      <b>
        <label className={cl.label} htmlFor={name}>
          {label}
        </label>
      </b>
      <input
        className={cl.checkbox}
        checked={isChecked}
        type="checkbox"
        name={name}
        id={name}
      />
      <div className={cl.switchBtn}></div>
    </div>
  );
};

export default SwitchButton;
