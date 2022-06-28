import { SVGAttributes } from 'react';
import {
  IconVariants,
  LessonsTypes,
  ProgressBarColorThemes,
  ProgressBarSizes,
  StudentStatuses,
  TariffPlans,
} from '@app/enums';

export interface ISvg extends SVGAttributes<SVGElement> {
  icon: IconVariants;
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

export interface IScheduleLesson {
  type: LessonsTypes;
  gradeNumber: number;
  lessonNumber: number;
  lessonStartDateTime: Date;
  zoomlink: string;
  mondayDate: Date;
}

export interface ISchedule {
  searchedDate: Date;
  className?: string;
}

export interface IStudentCard {
  studentName: string;
  status: StudentStatuses;
  city?: string;
  pointsNumber?: number;
  chatsLinks?: {
    whatsapp: string;
    telegram: string;
  };
  classroomZoomLink?: string;
  nextLessonData?: Date;
  tag?: number;
}

export interface IHomework {
  className?: string;
  gameTitle: string;
  description: {
    minutesLeft: number;
    needToDo: string;
    tips: {
      text: string;
      id: number;
    }[];
  };
  id: number;
}

export type ICell = React.ReactChild | Date;

export type IRow = { [key: string]: ICell };

export interface ITariffCard {
  tariffPlan: TariffPlans;
  moneyAmount: number;
  percentDiscount?: number;
  isExtraOption?: boolean;
}

export interface IProgressBar {
  title: string;
  percentToComplete: number;
  colorTheme: ProgressBarColorThemes;
  className?: string;
  id?: number;
  size?: ProgressBarSizes;
}
