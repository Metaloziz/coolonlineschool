import ChoiceGame from '@components/choice-game/ChoiceGame';
import PlayButton from '@components/play-button/PlayButton';
import Image from 'next/image';
import game from 'public/table.jpg';

import styles from './GamePlay.module.scss';

const GamePlay = () => (
  <div className={styles.inner}>
    <ChoiceGame />
    <div className={styles.wrapperBlock}>
      <div className={styles.container}>
        <div className={styles.containerImage}>
          <div className={styles.imageTable}>
            <Image src={game} alt="Игра" />
          </div>
          <PlayButton title="Играть" className={styles.playBtn} />
        </div>
        <div className={styles.tableBtn}>
          <div />
          <div />
        </div>
        <div className={styles.leftBtn} />
      </div>
      <div className={styles.textShulte}>
        <h2>Таблица Шульте</h2>
        <p>
          Высокий уровень вовлечения представителей целевой аудитории является четким
          доказательством простого факта: реализация намеченных плановых заданий создаёт
          необходимость включения в производственный план целого ряда внеочередных мероприятий с
          учётом комплекса глубокомысленных рассуждений. Как принято считать, сторонники
          тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию,
          своевременно верифицированы.
        </p>
      </div>
    </div>
  </div>
);

export default GamePlay;
