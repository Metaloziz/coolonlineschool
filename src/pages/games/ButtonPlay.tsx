import styles from '@pages/games/Games.module.scss';

const ButtonPlay = () => {
  return (
    <div className={styles.playButton}>
      <p>ИГРАТЬ</p>
      <div className={styles.roundPlay}> </div>
    </div>
  );
};

export default ButtonPlay;
