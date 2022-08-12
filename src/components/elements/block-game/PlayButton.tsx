import cl from './BlockGame.module.scss';

type Props = {
  onClick: () => void;
};

const PlayButton = ({ onClick }: Props) => (
  <div onClick={onClick} className={cl.playButton}>
    <p>ИГРАТЬ</p>
    <div className={cl.roundPlay}> </div>
  </div>
);

export default PlayButton;
