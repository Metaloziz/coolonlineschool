import { FC } from 'react';

import classNames from 'classnames';

import cl from './TaskVisualizersList.module.scss';

const TaskVisualizersList: FC = () => (
  <div className={cl.container}>
    <div className={cl.option}>
      <div className={classNames(cl.mentalArithmeticVisualizer, cl.visualizer)} />
      <span className={cl.text}>
        Ментальная
        <br /> арифметика
      </span>
    </div>
    <div className={cl.option}>
      <div className={classNames(cl.speedReadingVisualizer, cl.visualizer)} />
      <span className={cl.text}>Скорочтение</span>
    </div>
  </div>
);

export default TaskVisualizersList;
