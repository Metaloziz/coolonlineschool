import classNames from 'classnames';
import { FC, InputHTMLAttributes } from 'react';
import styles from './SwitchButton.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isChecked?: boolean;
  name: string;
}

const SwitchButton: FC<Props> = ({ label, isChecked = true, name }) => {
  return (
    <div
      className={classNames(styles.container, { [styles.switchOn]: isChecked })}
    >
      <b>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      </b>
      <input
        className={styles.checkbox}
        checked={isChecked}
        type="checkbox"
        name={name}
        id={name}
      />
      <div className={styles.switchBtn}></div>
    </div>
  );
};

export default SwitchButton;
