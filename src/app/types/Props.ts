import { ButtonHTMLAttributes } from 'react';
import {
  ButtonColorThemes,
  ProgressBarColorThemes,
  ProgressBarSizes,
  RatePlans,
} from '@app/enums/Enums';

// Containers

export type IRateTableRow = {
  id: number;
  moneyAmount: number;
  description: string;
  paymentDate: Date;
  ratePlan: RatePlans;
  status: 'success';
};

export interface RatesTableProps {
  rates: IRateTableRow[];
  className?: string;
}

export interface RateProps {
  ratePlan: RatePlans;
}

export interface ICardStudentOptions {
  studentName: string;
  status: string;
  geo?: string;
  pointsNumber?: number;
  chatsLinks?: {
    whatsappLink: string;
    telegramLink: string;
  };
  nextLessonData?: Date;
  tag?: number;
}

export interface CardStudentProps {
  options: ICardStudentOptions;
  className?: string;
}

export interface KeepPlayingProps {
  className?: string;
  games: ProgressBarProps[];
}

export interface HomeworksProps {
  className?: string;
  homeworks: HomeworkProps[];
}

export interface TeacherCommentProps {
  className?: string;
  commentDate: Date;
  comment: string;
}

export interface SelectHomeworksFormProps {
  className?: string;
  years: number[];
  months: number[];
  lessonNumbers: number[];
}

// Components

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button';
  className?: string;
  text: string;
  colorTheme?: ButtonColorThemes;
  image?: JSX.Element;
}

type IVerticalSliderOption = {
  text: string;
  id: number;
  isActive?: boolean;
};

export type VerticalSliderProps = {
  options: IVerticalSliderOption[];
  className?: string;
};

type ITableStudentRow = {
  fullName: string;
  studyPeriodBeginning: string;
  studyPeriodEnd: string;
  group: number;
  id: number;
};

export interface StudentsTableProps {
  students: ITableStudentRow[];
  className?: string;
}

type ISliderItem = {
  text: string;
  isActive?: boolean;
  id: number;
};

export type SliderProps = {
  className?: string;
  options: ISliderItem[];
  colorTheme?: 'blue' | 'red';
  size?: 'long' | 'normal';
};

export interface HomeworkProps {
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

export interface ProgressBarProps {
  title: string;
  percentToComplete: number;
  colorTheme: ProgressBarColorThemes;
  className?: string;
  id?: number;
  size?: ProgressBarSizes;
}
