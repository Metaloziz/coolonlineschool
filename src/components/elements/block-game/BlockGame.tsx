import PlayButton from '@components/elements/block-game/PlayButton';
import { Routes } from '@constants/Routes';
import headingImg from '@svgs/heading-img.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

import cl from './BlockGame.module.scss';

type BlockGameProps = {
  imageCard: string;
  title: string;
  description: string;
};

const BlockGame = ({ imageCard, title, description }: BlockGameProps) => {
  const { push } = useRouter();
  const { Game } = Routes;

  const onPlayGameClick = () => {
    push({
      pathname: Game,
      query: { gameId: title },
    });
  };

  return (
    <div className={cl.blockGame}>
      <div className={cl.startGame}>
        <div>
          <Image src={imageCard} width={151} height={151} alt="game" />
        </div>
        <PlayButton onClick={onPlayGameClick} />
      </div>
      <div className={cl.descriptionGame}>
        <div className={cl.heading}>
          <h3>{title}</h3>
          <Image src={headingImg} width={40} height={40} alt="heading" />
        </div>
        <div className={cl.content}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlockGame;
