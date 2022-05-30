import classNames from 'classnames';
import { FC } from 'react';
import { IHomework } from '@app/types';
import cl from './Homework.module.scss';

const Homework: FC<IHomework> = ({
  gameTitle,
  description: { needToDo, minutesLeft, tips },
  className,
}) => {
  return (
    <div className={classNames(cl.container, className)}>
      <h2 className={cl.gameTitle}>{gameTitle}</h2>
      <div className={cl.description}>
        <p>{`У вас есть ${minutesLeft} минут на выполнение задания`}</p>
        <em className={cl.needToDoTitle}>Необходимо:</em>
        <p>{needToDo}</p>
        <p className={cl.tipsTitle}>Подсказки</p>
        <ul className={cl.tips}>
          {tips.map(({ text, id }) => (
            <li key={id} className={cl.tip}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Homework;
