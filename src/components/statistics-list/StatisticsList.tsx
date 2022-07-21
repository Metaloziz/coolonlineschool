import { FC } from 'react';

import cn from 'classnames';

import StatisticsItem, { StatisticsItemProps } from './statistics-item/StatisticsItem';
import styles from './StatisticsList.module.scss';

export interface StatisticsListProps {
  className?: string;
  statisticsList: StatisticsItemProps[];
}

const StatisticsList: FC<StatisticsListProps> = ({ className, statisticsList }) => (
  <div className={cn(styles.containerChoice, className)}>
    {statisticsList.map(
      ({ percentCompleted, id, minutesLeft, colorTheme, itemTitle, minutesTotal }) => (
        <StatisticsItem
          itemTitle={itemTitle}
          colorTheme={colorTheme}
          percentCompleted={percentCompleted}
          minutesLeft={minutesLeft}
          minutesTotal={minutesTotal}
          key={id}
          id={id}
        />
      ),
    )}
  </div>
);

export default StatisticsList;
