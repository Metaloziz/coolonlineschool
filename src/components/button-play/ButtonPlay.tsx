import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonPlaySizes } from '@app/enums/Enums';
import styles from './ButtonPlay.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonPlaySizes;
}

const ButtonPlay: FC<Props> = ({
  size = ButtonPlaySizes.normal,
  className = '',
}) => {
  return (
    <button
      className={classNames(styles.container, className, {
        [styles.containerSmalled]: size === ButtonPlaySizes.small,
      })}
    >
      <div className={styles.img}></div>
      <p className={styles.text}>Играть</p>
    </button>
  );
};

export default ButtonPlay;
