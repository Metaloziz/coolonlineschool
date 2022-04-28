import classNames from 'classnames';
import { FC } from 'react';
import { HomeworkProps } from '@app/types/Props';
import Homework from '@components/homework/Homework';
import styles from './Homeworks.module.scss';

interface Props {
  className?: string;
  homeworks: HomeworkProps[];
}

const Homeworks: FC<Props> = ({ homeworks, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <p className={styles.panel}>Домашнее задание на 7 октября 2021</p>
      <div className={styles.homeworks}>
        {homeworks.map((homework) => (
          <Homework
            className={styles.homework}
            key={homework.id}
            {...homework}
          />
        ))}
      </div>
    </div>
  );
};

export default Homeworks;
