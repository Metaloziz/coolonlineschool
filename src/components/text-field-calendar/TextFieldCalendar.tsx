import classNames from 'classnames';
import { FC } from 'react';
import CustomCalendar from '@components/custom-calendar/CustomCalendar';
import styles from './TextFieldCalendar.module.scss';

const TextFieldCalendar: FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      <span className={styles.text}>{text}</span>
      <input className={styles.input} type={'text'} />
      <CustomCalendar />
    </div>
  );
};

export default TextFieldCalendar;
