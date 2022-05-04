import classNames from 'classnames';
import { FC } from 'react';
import { ButtonPlaySizes } from '@app/enums/Enums';
import { ProgressBarProps } from '@app/types/Props';
import ButtonPlay from '@components/button-play/ButtonPlay';
import ProgressBar from '@components/progress-bar/ProgressBar';
import styles from './KeepPlaying.module.scss';

interface Props {
  className?: string;
  games: ProgressBarProps[];
}

const KeepPlaying: FC<Props> = ({ className, games }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.title}>Процент выполненного домашнего задания</div>
      <div className={styles.progressBars}>
        {games.map((game) => (
          <ProgressBar className={styles.progressBar} key={game.id} {...game}>
            <ButtonPlay
              size={ButtonPlaySizes.small}
              className={styles.button}
            />
          </ProgressBar>
        ))}
      </div>
    </div>
  );
};

export default KeepPlaying;
