import Image from 'next/image';
import ButtonPlay from '@pages/games/ButtonPlay';
import headingImg from '@svgs/heading-img.svg';
import styles from './Games.module.scss';

type BlockGameProps = {
  imageCard: string;
  title: string;
  description: string;
};

const BlockGame = ({ imageCard, title, description }: BlockGameProps) => {
  return (
    <div className={styles.blockGame}>
      <div className={styles.startGame}>
        <div className={styles.image}>
          <Image src={imageCard} width={151} height={151} alt="game" />
        </div>
        <ButtonPlay />
      </div>
      <div className={styles.descriptionGame}>
        <div className={styles.heading}>
          <h3>{title}</h3>
          <Image src={headingImg} width={40} height={40} alt="heading" />
        </div>
        <div className={styles.content}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlockGame;
