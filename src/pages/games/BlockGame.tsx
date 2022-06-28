import Image from 'next/image';
import PlayButton from '@pages/games/PlayButton';
import headingImg from '@svgs/heading-img.svg';
import cl from './Games.module.scss';

type BlockGameProps = {
  imageCard: string;
  title: string;
  description: string;
};

const BlockGame = ({ imageCard, title, description }: BlockGameProps) => {
  return (
    <div className={cl.blockGame}>
      <div className={cl.startGame}>
        <div className={cl.image}>
          <Image src={imageCard} width={151} height={151} alt="game" />
        </div>
        <PlayButton />
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
