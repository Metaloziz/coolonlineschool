import classNames from 'classnames';
import { FC } from 'react';
import { ButtonPlaySizes } from '@app/enums/Enums';
import { IProgressBar } from '@app/types';
import { ProgressBar, ButtonPlay } from '@components';
import cl from './KeepPlaying.module.scss';

interface IKeepPlaying {
  className?: string;
  games: IProgressBar[];
}

const KeepPlaying: FC<IKeepPlaying> = ({ className, games }) => {
  return (
    <div className={classNames(cl.container, className)}>
      <div className={cl.title}>Процент выполненного домашнего задания</div>
      <div className={cl.progressBars}>
        {games.map((game) => (
          <ProgressBar className={cl.progressBar} key={game.id} {...game}>
            <ButtonPlay size={ButtonPlaySizes.small} className={cl.button} />
          </ProgressBar>
        ))}
      </div>
    </div>
  );
};

export default KeepPlaying;
