import { FC } from 'react';

import { Button } from '@components';
import BackButton from '@components/elements/backButton/BackButton';
import { Routes } from '@constants/Routes';
import { useRouter } from 'next/router';
import Game from 'src/components/elements/game/Game';

import cl from './GameBlock.module.scss';

const GameBlock: FC = () => {
  const { push, query } = useRouter();
  const { GameSettings } = Routes;

  const onSettingsClick = () => {
    push({
      pathname: GameSettings,
      query: { gameId: query.gameId },
    });
  };

  return (
    <div className={cl.innerContent}>
      <BackButton className={cl.goBack} />
      <Button onClick={onSettingsClick}>Настройки</Button>
      <Game
        title="Таблица Шульте"
        description="Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений. Как принято считать, сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. Противоположная точка зрения подразумевает, что интерактивные прототипы и по сей день остаются уделом либералов, которые жаждут быть"
      />
    </div>
  );
};

export default GameBlock;
