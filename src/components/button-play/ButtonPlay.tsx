import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonPlaySizes } from '@app/enums/Enums';
import cl from './ButtonPlay.module.scss';

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
      className={classNames(cl.container, className, {
        [cl.containerSmalled]: size === ButtonPlaySizes.small,
        [cl.containerOneGame]: oneGame,
      })}
    >
      <div className={cl.img} />
      <p className={cl.text}>Играть</p>
    </button>
  );
};

export default ButtonPlay;
