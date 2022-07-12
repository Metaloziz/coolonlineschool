import cl from '@pages/games/Games.module.scss';

const PlayButton = () => (
  <div className={cl.playButton}>
    <p>ИГРАТЬ</p>
    <div className={cl.roundPlay}> </div>
  </div>
);

export default PlayButton;
