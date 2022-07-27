import { FC } from 'react';

import { IHomework } from '@app/types';
import { Button, Homework } from '@components';
import classNames from 'classnames';
import styles from 'src/components/elements/homeworks/Homeworks.module.scss';

interface IHomeworks {
  className?: string;
  homeworks: IHomework[];
  isEdit?: boolean;
  isOlympics?: boolean;
}

const Homeworks: FC<IHomeworks> = ({ homeworks, className, isEdit, isOlympics }) => (
  <div className={classNames(styles.container, className)}>
    {isOlympics && <p className={styles.title}>Наименование олимпиады</p>}

    <div>
      {!isOlympics && <p className={styles.panel}>Домашнее задание на 7 октября 2021</p>}
      <div className={classNames(styles.homeworks, isOlympics && styles.olympics)}>
        {homeworks.map(homework => (
          <Homework className={styles.homeworks} key={homework.id} {...homework} />
        ))}
      </div>
    </div>
    {isEdit && <Button className={styles.button}>Изменить домашнее задание </Button>}
  </div>
);

export default Homeworks;
