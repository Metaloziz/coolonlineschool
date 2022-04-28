import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './CardStudentMainButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  Image?: JSX.Element;
}

const CardStudentMainButton: FC<Props> = ({ text, Image }) => {
  return (
    <button
      className={classNames(styles.container, { [styles.withImage]: !!Image })}
    >
      <span className={styles.text}>{text}</span>
      {Image}
    </button>
  );
};

export default CardStudentMainButton;
