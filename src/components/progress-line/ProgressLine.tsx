import { FC } from 'react';

import { colorThemeStatistic } from '@app/enums';
import { colorThemeDoughnut } from '@app/value-objects/colorThemeDoughnut';
import cn from 'classnames';

import styles from './ProgressLine.module.scss';

interface ProgressLineProps {
  colorTheme: colorThemeStatistic;
  completed: number;
  className?: string;
  title: string;
}

const ProgressLine: FC<ProgressLineProps> = ({ colorTheme, completed, className, title }) => (
  <div>
    <div className={cn(styles.labelStyles, styles[colorTheme])}>
      <span className={styles.percent}>{`${completed}%`}</span>
      <p>{title}</p>
    </div>
    <div className={cn(className, styles.containerStyles)}>
      <div
        className={styles.fillerStyles}
        style={{ width: `${completed}%`, backgroundColor: colorThemeDoughnut[colorTheme] }}
      />
    </div>
  </div>
);

export default ProgressLine;
