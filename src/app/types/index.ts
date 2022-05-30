import {
  ProgressBarColorThemes,
  ProgressBarSizes,
  RatePlans,
} from '@app/enums/Enums';

export interface IStudentCard {
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

export interface IRateTableRow {
  id: number;
  moneyAmount: number;
  description: string;
  paymentDate: Date;
  ratePlan: RatePlans;
  status: 'success';
}

export interface IRateCard {
  ratePlan: RatePlans;
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
