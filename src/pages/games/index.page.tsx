import BlockGame from '@pages/games/BlockGame';
import flashCards from '@svgs/games/flash-cards.svg';
import mentalaccount from '@svgs/games/mentalaccount.svg';
import numberFigureWord from '@svgs/games/number-figure-word.svg';
import readingWithGrid from '@svgs/games/reading-with-grid.svg';
import tableShulte from '@svgs/games/table-Shulte.svg';
import tangram from '@svgs/games/tangram.svg';

import cl from './Games.module.scss';

const gamesCardInfo = [
  {
    imageCard: tableShulte,
    title: 'Таблица Шульте',
    description:
      'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений. Как принято считать, сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. Противоположная точка зрения подразумевает, что интерактивные прототипы и по сей день остаются уделом либералов, которые жаждут быть ',
  },
  {
    imageCard: tangram,
    title: 'Танграм',
    description:
      'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений. Как принято считать, сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. ',
  },
  {
    imageCard: numberFigureWord,
    title: 'Число - фигура - слово',
    description:
      'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений. Как принято считать, сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. ',
  },
  {
    imageCard: mentalaccount,
    title: 'Ментальный счёт',
    description:
      'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений. Как принято считать, сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. ',
  },
  {
    imageCard: flashCards,
    title: 'Флеш-карты',
    description:
      'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений. Как принято считать, сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. ',
  },
  {
    imageCard: readingWithGrid,
    title: 'Чтение с решёткой',
    description:
      'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений. Как принято считать, сторонники тоталитаризма в науке, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. ',
  },
];

const IndexPage = () => (
  <div className={cl.innerContent}>
    {gamesCardInfo.map((item, index) => (
      <BlockGame
        imageCard={item.imageCard.src}
        title={item.title}
        description={item.description}
        key={index}
      />
    ))}
  </div>
);

export default IndexPage;
