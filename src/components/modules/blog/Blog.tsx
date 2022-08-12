import book from '@svgs/book.svg';
import Image from 'next/image';

import styles from './Blog.module.scss';

const SingleGame = () => (
  <div className={styles.wrapperSingleGame}>
    <div className={styles.imageBook}>
      <Image src={book} width="399" height="399" alt="bookIcon" />
    </div>
    <div className={styles.textGame}>
      <div>
        <h2>Второй блок</h2>
      </div>
      <div className={styles.wrapperText}>
        <p>
          Высокий уровень вовлечения представителей целевой аудитории является четким
          доказательством простого факта: реализация намеченных плановых заданий создаёт
          необходимость включения в производственный план целого ряда внеочередных мероприятий с
          учётом комплекса глубокомысленных рассуждений. Как принято считать, сторонники
          тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию,
          своевременно верифицированы. Противоположная точка зрения подразумевает, что интерактивные
          прототипы и по сей день остаются уделом либералов, которые жаждут быть
        </p>
      </div>
    </div>
  </div>
);
export default SingleGame;
