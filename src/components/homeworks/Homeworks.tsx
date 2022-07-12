import { FC } from 'react';

import { IHomework } from '@app/types';
import { Button, Homework } from '@components';
import classNames from 'classnames';

import styles from './Homeworks.module.scss';

interface IHomeworks {
  className?: string;
  homeworks: IHomework[];
  isEdit?: boolean;
}

const Homeworks: FC<IHomeworks> = ({ homeworks, className, isEdit }) => (
  <div className={classNames(styles.container, className)}>
    <div>
      <p className={styles.panel}>Домашнее задание на 7 октября 2021</p>
      <div className={styles.homeworks}>
        {homeworks.map(homework => (
          <Homework className={styles.homework} key={homework.id} {...homework} />
        ))}
      </div>
    </div>
    {isEdit && <Button className={styles.button}>Изменить домашнее задание </Button>}
  </div>
);

export default Homeworks;
