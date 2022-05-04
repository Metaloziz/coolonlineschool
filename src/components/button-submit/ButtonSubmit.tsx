import classNames from 'classnames';
import { FC } from 'react';
import styles from './ButtonSubmit.module.scss';

const ButtonSubmit: FC<{ className?: string }> = ({ className }) => {
  return (
    <button className={classNames(styles.container, className)} type="submit">
      Найти
    </button>
  );
};

export default ButtonSubmit;
