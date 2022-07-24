import { getRandomId } from '@utils/RandomId';

export const HOMEWORKS = [
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
];
