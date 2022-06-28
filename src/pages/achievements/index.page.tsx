import { StudentStatuses } from '@app/enums';
import { StudentCard } from '@components';
import BlockAchievement from '@pages/achievements/BlockAchievement';
import best10 from '@svgs/games/best10.svg';
import best20 from '@svgs/games/best20.svg';
import best30 from '@svgs/games/best30.svg';
import expert from '@svgs/games/expert.svg';
import flashCards from '@svgs/games/flash-cards.svg';
import goodWorkClass from '@svgs/games/good-work-class.svg';
import greatWorkClass20 from '@svgs/games/great-work-class20.svg';
import greatWorkClass30 from '@svgs/games/great-work-class30.svg';
import internalCompetitions from '@svgs/games/internal-competitions.svg';
import mentalaccount from '@svgs/games/mentalaccount.svg';
import numberFigureWord from '@svgs/games/number-figure-word.svg';
import olympiad from '@svgs/games/olympiad.svg';
import tableShulte from '@svgs/games/table-Shulte.svg';
import winCompetitions from '@svgs/games/win-competitions.svg';
import winnerOlympiad from '@svgs/games/winner-olympiad.svg';
import cl from './Achievements.module.scss';

const achievementCardsInfo = [
  {
    isActive: true,
    imageCard: tableShulte,
    title: 'Лучший результат в тренажере Таблица Шульте',
  },
  {
    isActive: false,
    imageCard: flashCards,
    title: 'Лучший результат в тренажере Флеш-карты',
  },
  {
    isActive: true,
    imageCard: numberFigureWord,
    title: 'Лучший результат в тренажере Число - фигура - слово',
  },
  {
    isActive: true,
    imageCard: mentalaccount,
    title: 'Лучший результат в тренажере Ментальный счёт',
  },
  {
    isActive: false,
    imageCard: best10,
    title: 'Выполнение дополнительных заданий на протяжении 10 дней',
  },
  {
    isActive: true,
    imageCard: olympiad,
    title: 'Участие в олимпиаде',
  },
  {
    isActive: true,
    imageCard: goodWorkClass,
    title: 'Хорошая работа на занятии (10 занятий получать баллы за работу)',
  },
  {
    isActive: false,
    imageCard: expert,
    title:
      'Эксперт тренажеров (на протяжении месяца иметь отличные результаты в любых 3х тренажёрах по МА)',
  },
  {
    isActive: false,
    imageCard: best20,
    title: 'Выполнение дополнительных заданий на протяжении 20 дней',
  },
  {
    isActive: false,
    imageCard: winnerOlympiad,
    title: 'Победа в олимпиаде',
  },
  {
    isActive: false,
    imageCard: greatWorkClass20,
    title: 'Отличная работа на занятии (20 занятий получать баллы за работу)',
  },
  {
    isActive: true,
    imageCard: internalCompetitions,
    title: 'Участие во внутренних конкурсах ',
  },
  {
    isActive: false,
    imageCard: best30,
    title: 'Выполнение дополнительных заданий на протяжении 30 дней',
  },
  {
    isActive: false,
    imageCard: greatWorkClass30,
    title:
      'Блистательная работа на занятии (30 занятий получать баллы за работу)',
  },
  {
    isActive: false,
    imageCard: winCompetitions,
    title: 'Победа в конкурсе',
  },
];

const IndexPage = () => {
  return (
    <div className={cl.innerContent}>
      <div className={cl.wrapStudentCard}>
        <StudentCard
          options={{
            studentName: 'Днепровский Александр Алексеевич',
            status: StudentStatuses.beginner,
            pointsNumber: 1,
            city: 'Москва',
          }}
        />
      </div>
      <div className={cl.wrapContent}>
        {achievementCardsInfo.map((item, index) => {
          return (
            <BlockAchievement
              key={index}
              imageCard={item.imageCard.src}
              isActive={item.isActive}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IndexPage;
