import { FC } from 'react';

import cn from 'classnames';
import StatisticsItem, {
  StatisticsItemProps,
} from 'src/components/elements/statistics-list/statistics-item/StatisticsItem';
import styles from 'src/components/elements/statistics-list/StatisticsList.module.scss';

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
