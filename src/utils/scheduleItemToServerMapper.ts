import { DateTime } from '@app/enums/DateTime';
import { ScheduleType } from '@app/types/ScheduleType';
import moment from 'moment';

export class LessonType {
  id: string;

  name: string;

  date: Date;

  from: Date;

  to: Date;

  constructor(id?: string) {
    const today = moment(new Date())
      .format(DateTime.DdMmYyyy)
      .split('.')
      .map(el => Number(el));
    this.name = '';
    this.id = id || (Math.random() * 100).toString();
    this.date = new Date();
    this.from = new Date(today[2], today[1], today[0], 8, 0);
    this.to = new Date(today[2], today[1], today[0], 8, 45);
  }
}

export const scheduleItemToServerMapper = (elem: LessonType): ScheduleType => ({
  date: moment(elem.date).format(DateTime.DdMmYyyy),
  from: moment(elem.from).format(DateTime.WithTime).split(' ')[1],
  name: elem.name,
  to: moment(elem.to).format(DateTime.WithTime).split(' ')[1],
});

export const scheduleItemToUIMapper = (elem: ScheduleType): LessonType => {
  const d = elem.date
    .split('.')
    .reverse()
    .map(el => Number(el));
  const from = elem.from.split(':').map(el => Number(el));
  const to = elem.to.split(':').map(el => Number(el));
  return {
    date: new Date(d[0], d[1] - 1, d[2]),
    name: elem.name,
    id: (Math.random() * 1000).toString(),
    from: new Date(2022, 0, 1, from[0], from[1]),
    to: new Date(2022, 0, 1, to[0], to[1]),
  };
};
