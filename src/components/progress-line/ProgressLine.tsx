import { FC } from 'react';

import { colorThemeStatistic } from '@app/enums';
import { colorThemeDoughnut } from '@app/value-objects/colorThemeDoughnut';
import cn from 'classnames';

import styles from './ProgressLine.module.scss';

interface ProgressLineProps {
  bgColor: colorThemeStatistic;
  completed: number;
  className?: string;
  title: string;
}

const ProgressLine: FC<ProgressLineProps> = ({ bgColor, completed, className, title }) => (
  <div>
    <div className={cn(styles.labelStyles, styles[bgColor])}>
      <span className={styles.percent}>{`${completed}%`}</span>
      <p>{title}</p>
    </div>
    <div className={cn(className, styles.containerStyles)}>
      <div
        className={styles.fillerStyles}
        style={{ width: `${completed}%`, backgroundColor: colorThemeDoughnut[bgColor] }}
      />
    </div>
  </div>
);

export default ProgressLine;
