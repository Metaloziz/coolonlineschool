import { ProgressBarColorThemes, ProgressBarSizes } from '@app/enums/Enums';

export interface SkillGrowProps {
  skillTitle: string;
  color: string;
  percents: number;
  id: number;
}

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
export interface CardStudentOptions {
  studentName: string;
  status: string;
  geo?: string;
  pointsNumber?: number;
  chatsLinks?: { whatsappLink: string; telegramLink: string };
  nextLessonData?: string;
  tag?: number;
}

export interface CardStudentProps {
  options: CardStudentOptions;
  className?: string;
}

export interface TeacherCommentProps {
  className?: string;
  commentDate: string;
  comment: string;
}

export interface SelectHomeworksFormProps {
  className?: string;
  years: number[];
  months: number[];
  lessonNumbers: number[];
}
