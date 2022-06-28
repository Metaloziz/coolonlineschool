import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { PlayButtonSizes } from '@app/enums';
import cl from './PlayButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: PlayButtonSizes;
  oneGame?: boolean;
}

const PlayButton: FC<Props> = ({
  size = PlayButtonSizes.normal,
  className = '',
  oneGame = false,
}) => {
  return (
    <button
      className={classNames(cl.container, className, {
        [cl.containerSmalled]: size === PlayButtonSizes.small,
        [cl.containerOneGame]: oneGame,
      })}
    >
      <div className={cl.img} />
      <p className={cl.text}>Играть</p>
    </button>
  );
};

export default PlayButton;
