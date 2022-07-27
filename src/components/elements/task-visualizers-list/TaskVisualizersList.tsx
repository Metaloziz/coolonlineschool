import { FC } from 'react';

import classNames from 'classnames';
import cl from 'src/components/elements/task-visualizers-list/TaskVisualizersList.module.scss';

interface Props {
  className?: string;
}

const TaskVisualizersList: FC<Props> = ({ className }) => (
  <div className={classNames(cl.container, className)}>
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
