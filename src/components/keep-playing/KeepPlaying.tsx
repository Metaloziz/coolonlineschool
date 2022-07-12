import { FC } from 'react';

import { PlayButtonSizes } from '@app/enums';
import { IProgressBar } from '@app/types';
import { ProgressBar, PlayButton } from '@components';
import classNames from 'classnames';

import cl from './KeepPlaying.module.scss';

interface IKeepPlaying {
  className?: string;
  games: IProgressBar[];
}

const KeepPlaying: FC<IKeepPlaying> = ({ className, games }) => (
  <div className={classNames(cl.container, className)}>
    <div className={cl.title}>Процент выполненного домашнего задания</div>
    <div className={cl.progressBars}>
      {games.map(game => (
        <ProgressBar className={cl.progressBar} key={game.id} {...game}>
          <PlayButton size={PlayButtonSizes.small} className={cl.button} />
        </ProgressBar>
      ))}
    </div>
  </div>
);

export default KeepPlaying;
