import { FC } from 'react';

import classNames from 'classnames';
import cl from 'src/components/elements/switch-button/SwitchButton.module.scss';

type SwitchSize = 'small' | 'large';

interface Props {
  label?: string;
  isChecked?: boolean;
  name: string;
  onChange: () => void;
  size?: SwitchSize;
  className?: string;
}

const SwitchButton: FC<Props> = ({ className, size, label, isChecked = true, name, onChange }) => {
  let sizeSwitch = '';
  switch (size) {
    case 'small':
      sizeSwitch = cl.small;
      break;
    case 'large':
      sizeSwitch = cl.large;
      break;
    default:
      sizeSwitch = '';
  }

  return (
    <div className={classNames(cl.container, className)}>
      <b>
        <label className={cl.label} htmlFor={name} onClick={onChange}>
          {label}
        </label>
      </b>
      <input className={cl.checkbox} checked={isChecked} type="checkbox" name={name} id={name} />
      <div
        className={classNames(cl.switchBtn, sizeSwitch, { [cl.switchOn]: isChecked })}
        onClick={onChange}
      />
    </div>
  );
};

export default SwitchButton;
