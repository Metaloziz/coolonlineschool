import { FC, InputHTMLAttributes } from 'react';

import classNames from 'classnames';

import cl from './SwitchButton.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isChecked?: boolean;
  name: string;
  onChange: () => void;
}

const SwitchButton: FC<Props> = ({ label, isChecked = true, name, onChange }) => (
  <div className={cl.container}>
    <b>
      <label className={cl.label} htmlFor={name} onClick={onChange}>
        {label}
      </label>
    </b>
    <input className={cl.checkbox} checked={isChecked} type="checkbox" name={name} id={name} />
    <div className={classNames(cl.switchBtn, { [cl.switchOn]: isChecked })} onClick={onChange} />
  </div>
);

export default SwitchButton;
