import { ButtonHTMLAttributes, FC } from 'react';

import { PlayButtonSizes } from '@app/enums';
import classNames from 'classnames';
import cl from 'src/components/elements/play-button/PlayButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: PlayButtonSizes;
  oneGame?: boolean;
}

const PlayButton: FC<Props> = ({
  size = PlayButtonSizes.normal,
  className = '',
  oneGame = false,
}) => (
  <button
    type="button"
    className={classNames(cl.container, className, {
      [cl.containerSmalled]: size === PlayButtonSizes.small,
      [cl.containerOneGame]: oneGame,
    })}
  >
    <div className={cl.img} />
    <p className={cl.text}>Играть</p>
  </button>
);

export default PlayButton;
