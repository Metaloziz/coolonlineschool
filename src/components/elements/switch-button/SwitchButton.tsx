import { FC, useState } from 'react';

import classNames from 'classnames';
import { FieldValues } from 'react-hook-form';
import cl from 'src/components/elements/switch-button/SwitchButton.module.scss';

type SwitchSize = 'small' | 'large';

interface Props {
  label?: string;
  checked?: boolean;
  size?: SwitchSize;
  className?: string;
  props: FieldValues;
}

const SwitchButton: FC<Props> = ({ className, size, label, checked = true, props }) => {
  const [isChecked, setIsChecked] = useState(props.value);

  const handleChange = () => {
    setIsChecked(!isChecked);
    props.onChange(!isChecked);
  };

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
        <label className={cl.label} onClick={handleChange}>
          {label}
        </label>
      </b>
      <input className={cl.checkbox} type="checkbox" {...props} />
      <div
        className={classNames(cl.switchBtn, sizeSwitch, { [cl.switchOn]: !isChecked })}
        onClick={handleChange}
      />
    </div>
  );
};

export default SwitchButton;
