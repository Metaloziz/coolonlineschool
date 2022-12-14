import { FC } from 'react';

import { PlayButton } from '@components';
import gameImg from '@svgs/one-game/game-table-Shulte.svg';
import Image from 'next/image';

import cl from './Game.module.scss';

interface Props {
  title: string;
  description: string;
}

const Game: FC<Props> = ({ title, description }) => (
  <div className={cl.contentGame}>
    <div className={cl.blockGame}>
      <div className={cl.imgBlock}>
        <Image src={gameImg} alt="goBack" />
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

export default Game;
