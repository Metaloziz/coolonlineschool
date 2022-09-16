export type ScheduleType = {
  name: string;
  date: string;
  from: string;
  to: string;
};

export type ShortScheduleType = Pick<ScheduleType, 'date' | 'from'>;
