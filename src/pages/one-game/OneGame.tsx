import Image from 'next/image';
import { FC } from 'react';
import ButtonPlay from '@components/button-play/ButtonPlay';
import cl from '@pages/one-game/OneGame.module.scss';
import gameImg from '@svgs/one-game/game-table-Shulte.svg';

interface Props {
  title: string;
  description: string;
}

const OneGame: FC<Props> = ({ title, description }) => {
  return (
    <div className={cl.contentGame}>
      <div className={cl.blockGame}>
        <div className={cl.imagePlay}>
          <Image src={gameImg} width={461} height={461} alt="goBack" />
          <div className={cl.player}>
            <ButtonPlay oneGame />
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

export default OneGame;
