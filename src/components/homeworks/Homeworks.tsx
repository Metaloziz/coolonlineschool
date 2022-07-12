import classNames from 'classnames';
import { FC } from 'react';
import { IHomework } from '@app/types';
import { Button, Homework } from '@components';
import cl from './Homeworks.module.scss';

interface IHomeworks {
  className?: string;
  homeworks: IHomework[];
}

const Homeworks: FC<IHomeworks> = ({ homeworks, className }) => {
  return (
    <div className={classNames(cl.container, className)}>
      <p className={cl.panel}>Домашнее задание на 7 октября 2021</p>
      <div className={cl.homeworks}>
        {homeworks.map((homework) => (
          <Homework className={cl.homework} key={homework.id} {...homework} />
        ))}
      </div>
      <Button className={cl.button}>Изменить домашнее задание </Button>
    </div>
  );
};

export default Homeworks;
