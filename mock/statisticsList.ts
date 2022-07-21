import { colorThemeStatistic } from '@app/enums';
import { StatisticsItemProps } from '@components/statistics-list/statistics-item/StatisticsItem';

export const STATISTICS_LIST: StatisticsItemProps[] = [
  {
    id: 1,
    itemTitle: 'Общая стаститика',
    minutesLeft: 18,
    minutesTotal: 50,
    colorTheme: colorThemeStatistic.blue,
    percentCompleted: 35,
  },
  {
    id: 2,
    itemTitle: 'Филателист',
    minutesLeft: 36,
    minutesTotal: 50,
    colorTheme: colorThemeStatistic.gradientViolet,
    percentCompleted: 55,
  },
  {
    id: 3,
    itemTitle: 'Паро-вик',
    minutesLeft: 44,
    minutesTotal: 50,
    colorTheme: colorThemeStatistic.gradientBlueDarker,
    percentCompleted: 65,
  },
  {
    id: 4,
    itemTitle: 'Сдвиг по вертикали',
    minutesLeft: 31,
    minutesTotal: 50,
    colorTheme: colorThemeStatistic.aquamarine,
    percentCompleted: 75,
  },
];
