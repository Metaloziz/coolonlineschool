import classNames from 'classnames';
import { FC } from 'react';
import { ButtonPlaySizes } from '@app/enums/Enums';
import { KeepPlayingItemProps } from '@app/types/Props';
import ButtonPlay from '@components/button-play/ButtonPlay';
import styles from './KeepPlayingItem.module.scss';

const KeepPlayingItem: FC<KeepPlayingItemProps> = ({
  title,
  percentToComplete: percent,
  colorTheme,
  className,
}) => {
  const deg = (360 * percent) / 100 + 180;

  return (
    <div
      className={classNames(styles.container, styles[colorTheme], className)}
    >
      <div
        className={classNames(styles.diagram, {
          [styles.over_50]: percent >= 50,
        })}
        data-percent={percent}
      >
        <div className={classNames(styles.piece, styles.left)}></div>
        <div
          style={{ transform: `rotate(${deg}deg)` }}
          className={classNames(styles.piece, styles.right)}
        ></div>
        <ButtonPlay size={ButtonPlaySizes.small} className={styles.button} />
      </div>
      <span className={styles.percentToComplete}>{percent}%</span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default KeepPlayingItem;
