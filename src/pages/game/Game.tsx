import Image from 'next/image';
import { FC } from 'react';
import { PlayButton } from '@components';
import gameImg from '@svgs/one-game/game-table-Shulte.svg';
import cl from './Game.module.scss';

interface Props {
  title: string;
  description: string;
}

const Game: FC<Props> = ({ title, description }) => {
  return (
    <div className={cl.contentGame}>
      <div className={cl.blockGame}>
        <div className={cl.imagePlay}>
          <Image src={gameImg} width={461} height={461} alt="goBack" />
          <div className={cl.player}>
            <PlayButton oneGame />
          </div>
        </div>
      </div>
      <div className={cl.descriptionGame}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Game;
