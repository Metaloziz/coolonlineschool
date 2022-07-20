import { FC } from 'react';

import { colorThemeStatistic } from '@app/enums';
import { Chart, DoughnutController, ArcElement, ChartConfiguration } from 'chart.js';
import DoughnutLabel from 'chartjs-plugin-doughnutlabel-rebourne';
import { Doughnut } from 'react-chartjs-2';

import styles from './CustomDoughnut.module.scss';

Chart.register([DoughnutController, ArcElement, DoughnutLabel]);

interface CustomDoughnutProps {
  color: colorThemeStatistic;
  percent: number;
}

export const colorThemeDoughnut = {
  aquamarine: '#00B8D9',
  gradientViolet: '#7A28D3',
  gradientBlueDarker: '#102CA6',
  blue: '#2E8DFD',
};

const CustomDoughnut: FC<CustomDoughnutProps> = ({ color, percent }) => {
  const config: ChartConfiguration<'doughnut'> = {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [percent, 100 - percent],
          backgroundColor: [colorThemeDoughnut[color], '#D2D2D2'],
          borderWidth: 0,
        },
      ],
    },

    options: {
      normalized: true,
      rotation: 180,
      cutout: '90%',
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: `${percent}%`,
              font: {
                size: 50,
              },
              color: colorThemeDoughnut[color],
            },
            {
              text: 'Правильных',
              font: {
                size: 25,
              },

              color: 'grey',
            },
            {
              text: 'ответов',
              font: {
                size: 25,
              },

              color: '#646464',
            },
          ],
        },
      },
    },
  };

  return (
    <div className={styles.canvasBlock}>
      <Doughnut {...config} />
    </div>
  );
};

export default CustomDoughnut;
