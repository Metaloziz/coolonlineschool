import { FC } from 'react';

import BackButton from '@components/backButton/BackButton';
import goBack from '@svgs/go-back-img.svg';
import Image from 'next/image';

import Game from './Game';
import cl from './Game.module.scss';

const IndexPage: FC = () => (
  <div className={cl.innerContent}>
    <BackButton className={cl.goBack} />
    <Game
      title="Таблица Шульте"
      description="Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений. Как принято считать, сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. Противоположная точка зрения подразумевает, что интерактивные прототипы и по сей день остаются уделом либералов, которые жаждут быть"
    />
  </div>
);

export default IndexPage;
