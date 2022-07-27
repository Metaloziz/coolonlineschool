import React, { FC } from 'react';

import Tablet from '@components/elements/tablet/Tablet';
import {
  ArcElement,
  CategoryScale,
  Chart,
  Decimation,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  LogarithmicScale,
  PointElement,
  RadarController,
  RadialLinearScale,
  ScriptableScaleContext,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip,
} from 'chart.js';
import { AnyObject } from 'chart.js/types/basic';
import { Line } from 'react-chartjs-2';
import styles from 'src/components/elements/graph/Graph.module.scss';

Chart.register(
  ArcElement,
  LineElement,
  PointElement,
  LineController,
  RadarController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
);
type Props = {};

const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Utils = {
  CHART_COLORS: {
    blue: '#4c8f9b',
    yellow: '#ecd7aa',
    red: '#ea7979',
  },
};
let width: any;
let height: any;
let gradient: any;

function getGradient(ctx: any, chartArea: any) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, Utils.CHART_COLORS.blue);
    gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow);
    gradient.addColorStop(1, Utils.CHART_COLORS.red);
  }

  return gradient;
}

const MONOTONE = 'monotone' as const;

const config = {
  data: {
    labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'red',
        borderWidth: 2,
        pointRadius: 0,
        borderColor(context: any) {
          const { chart } = context;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          // eslint-disable-next-line consistent-return
          return getGradient(ctx, chartArea);
        },
        data: [0, 80, 5, 2, 20, 70, 45, 65, 5, 2, 20, 70, 45, 65],
        cubicInterpolationMode: MONOTONE,
      },
    ],
  },
  options: {
    font: {
      family: 'Montserrat',
      size: 9,
      weight: '400',
    },
    scales: {
      x: {
        grid: {
          color(context: ScriptableScaleContext, options: AnyObject) {
            return '#fff';
          },
        },
        ticks: {
          callback: (e: number | string) => {
            if (typeof e === 'number' && e % 2) {
              return '';
            }
            return e;
          },
          color: '#BABEC6',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [2, 2],
        },
        ticks: {
          display: false,
          callback: (e: number | string) => {
            if (typeof e === 'number' && e % 2) {
              return e;
            }
            return '';
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    backgroundColor: '',
  },
};

export type ValueLabelT = {
  value: string;
  label: string;
};

const Graph: FC<Props> = () => (
  <div className={styles.container}>
    <div className={styles.main}>
      <Tablet>
        <div className={styles.header}>
          <div className={styles.exemple}>
            <div>ФИО ученика</div>
            <div className={styles.dataData}>
              <div>Начало периода</div>
              <div>Конец периода</div>
            </div>
            <div>Группа</div>
          </div>
          <div className={styles.data}>
            <div>Днепровская А.А.</div>
            <div className={styles.dataData}>
              <div>12/11/2011</div>
              <div>21/11/2021</div>
            </div>
            <div>Группа 1</div>
          </div>
        </div>
        <Line className={styles.canvas} {...config} />
      </Tablet>
    </div>
  </div>
);
export default Graph;
