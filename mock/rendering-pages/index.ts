import { ProgressBarColorThemes, ProgressBarSizes } from '@app/enums/Enums';
import {
  CardStudentProps,
  HomeworksProps,
  KeepPlayingProps,
  ProgressBarProps,
  SelectHomeworksFormProps,
  SliderProps,
  StudentsTableProps,
  TeacherCommentProps,
  VerticalSliderProps,
} from '@app/types/Props';
import { getRandomId } from '@utils/RandomId';

type IHomePageRendering = {
  cardStudent: CardStudentProps;
  keepPlaying: KeepPlayingProps;
  selectHomeworksForm: SelectHomeworksFormProps;
  homeworks: HomeworksProps;
  teacherComment: TeacherCommentProps;
};

export const homePageRendering: IHomePageRendering = {
  cardStudent: {
    options: {
      studentName: 'Днепровский Александр Алексеевич',
      status: 'Новичок',
      geo: 'Москва',
      pointsNumber: 4,
      tag: 837212,
      chatsLinks: { telegramLink: './', whatsappLink: './' },
      nextLessonData: new Date(),
    },
  },
  keepPlaying: {
    games: [
      {
        title: 'Общий показатель',
        percentToComplete: 50,
        colorTheme: ProgressBarColorThemes.red,
        id: getRandomId(),
      },
      {
        title: 'Память и ритм',
        percentToComplete: 18,
        colorTheme: ProgressBarColorThemes.blue,
        id: getRandomId(),
      },
      {
        title: 'Число - фигура - слово',
        percentToComplete: 36,
        colorTheme: ProgressBarColorThemes.yellowLight,
        id: getRandomId(),
      },
      {
        title: 'Мухи в кубе',
        percentToComplete: 70,
        colorTheme: ProgressBarColorThemes.violet,
        id: getRandomId(),
      },
      {
        title: 'Антипазл',
        percentToComplete: 80,
        colorTheme: ProgressBarColorThemes.green,
        id: getRandomId(),
      },
      {
        title: 'Антипазл',
        percentToComplete: 99,
        colorTheme: ProgressBarColorThemes.yellow,
        id: getRandomId(),
      },
    ],
  },
  selectHomeworksForm: {
    lessonNumbers: [1, 2, 3],
    months: [1, 2, 3],
    years: [2022, 2021, 2020],
  },
  homeworks: {
    homeworks: [
      {
        gameTitle: 'Память и ритм',
        id: getRandomId(),
        description: {
          needToDo: '',
          minutesLeft: 10,
          tips: [
            {
              text: '1',
              id: getRandomId(),
            },
            {
              text: '2',
              id: getRandomId(),
            },
            {
              text: '3',
              id: getRandomId(),
            },
          ],
        },
      },
      {
        gameTitle: 'Число - фигура - слово',
        id: getRandomId(),
        description: {
          needToDo: 'Присесть 1070 раз и сделать 1200 отжиманий',
          minutesLeft: 120,
          tips: [
            {
              text: 'test',
              id: getRandomId(),
            },
            {
              text: 'test2',
              id: getRandomId(),
            },
            {
              text: 'test3',
              id: getRandomId(),
            },
          ],
        },
      },
    ],
  },
  teacherComment: {
    commentDate: new Date(),
    comment:
      'Значимость этих проблем настолько очевидна, что разбавленное изрядной долей эмпатии,   мышление в значительной степени обусловливает важность соответствующих условий активизации. Ясность нашей позиции очевидна: глубокий уровень погружения является качественно...',
  },
};

type IResultsPageRendering = {
  cardStudent: CardStudentProps;
  getResultsForm: Record<string, never>;
  progressBar: ProgressBarProps;
  slider: SliderProps;
  table: StudentsTableProps;
  verticalSlider: VerticalSliderProps;
};

export const resultsPageRendering: IResultsPageRendering = {
  cardStudent: {
    options: {
      status: 'Новичок',
      studentName: 'Днепровский Александр Алексеевич',
      geo: 'Москва',
    },
  },
  getResultsForm: {},
  progressBar: {
    title: 'Общий балл',
    percentToComplete: 50,
    colorTheme: ProgressBarColorThemes.red,
    size: ProgressBarSizes.big,
  },
  slider: {
    options: [
      { id: getRandomId(), text: 'Таблица' },
      {
        id: getRandomId(),
        isActive: true,
        text: 'График',
      },
    ],
    colorTheme: 'red',
  },
  table: {
    students: [
      {
        fullName: 'Днепровский Александр Алексеевич',
        studyPeriodBeginning: '' + new Date().toISOString().substring(0, 10),
        studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
        group: 1,
        id: getRandomId(),
      },
      {
        fullName: 'Днепровский Александр Алексеевич',
        studyPeriodBeginning: '' + new Date().toISOString().substring(0, 10),
        studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
        group: 1,
        id: getRandomId(),
      },
      {
        fullName: 'Днепровский Александр Алексеевич',
        studyPeriodBeginning: '' + new Date().toISOString().substring(0, 10),
        studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
        group: 1,
        id: getRandomId(),
      },
      {
        fullName: 'Днепровский Александр Алексеевич',
        studyPeriodBeginning: '' + new Date().toISOString().substring(0, 10),
        studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
        group: 1,
        id: getRandomId(),
      },
    ],
  },
  verticalSlider: {
    options: [
      {
        text: 'Параметр 1',
        id: getRandomId(),
        isActive: true,
      },
      { text: 'Параметр 2', id: getRandomId() },
      { text: 'Параметр 3', id: getRandomId() },
      { text: 'Параметр 4', id: getRandomId() },
      { text: 'Параметр 5', id: getRandomId() },
    ],
  },
};
