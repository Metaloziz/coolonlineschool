import {
  ProgressBarColorThemes,
  ProgressBarSizes,
  TariffPlans,
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
