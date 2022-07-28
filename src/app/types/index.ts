import React, { SVGAttributes } from 'react';

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
  id: string;
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
  teacher?: string;
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
  moneyAmount: number | string;
  percentDiscount?: number;
  isExtraOption?: boolean;
  className?: string;
}

export interface IProgressBar {
  title: string;
  percentToComplete: number;
  colorTheme: ProgressBarColorThemes;
  className?: string;
  id?: number;
  size?: ProgressBarSizes;
}

export type DefaultButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'AnimationEvent' | 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref' // todo нужны ли стандартные свойства кнопки и можно ли заменить на что-то красивое ? как передать компоненте дефолтные свойства из motion.button ?
>;
