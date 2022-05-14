import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonPlaySizes } from '@app/enums/Enums';
import styles from './ButtonPlay.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonPlaySizes;
  oneGame?: boolean;
}

const ButtonPlay: FC<Props> = ({
  size = ButtonPlaySizes.normal,
  className = '',
  oneGame = false,
}) => {
  return (
    <button
      className={classNames(styles.container, className, {
        [styles.containerSmalled]: size === ButtonPlaySizes.small,
        [styles.containerOneGame]: oneGame,
      })}
    >
      <div className={styles.img} />
      <p className={styles.text}>Играть</p>
    </button>
  );
};

export default ButtonPlay;
