import Image from 'next/image';
import { FC } from 'react';
import goBack from '@svgs/go-back-img.svg';
import Game from './Game';
import cl from './Game.module.scss';

const IndexPage: FC = () => {
  return (
    <div className={cl.innerContent}>
      <div className={cl.goBack}>
        <div className={cl.image}>
          <Image src={goBack} width={30} height={30} alt="goBack" />
        </div>
        <p>На предыдущую страницу</p>
      </div>
      <Game
        title="Таблица Шульте"
        description="Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений. Как принято считать, сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. Противоположная точка зрения подразумевает, что интерактивные прототипы и по сей день остаются уделом либералов, которые жаждут быть"
      />
    </div>
  );
};

export default IndexPage;
