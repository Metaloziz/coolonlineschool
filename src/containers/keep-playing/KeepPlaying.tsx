import classNames from 'classnames';
import { FC } from 'react';
import { KeepPlayingProps } from '@app/types/ComponentsProps';
import KeepPlayingItem from '@components/keep-playing-item/KeepPlayingItem';
import styles from './KeepPlaying.module.scss';

const KeepPlaying: FC<KeepPlayingProps> = ({ className, games }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.title}>Процент выполненного домашнего задания</div>
      <div className={styles.keepPlayingItems}>
        {games.map((game) => (
          <KeepPlayingItem
            className={styles.keepPlayingItem}
            key={game.id}
            {...game}
          />
        ))}
      </div>
    </div>
  );
};

export default KeepPlaying;
