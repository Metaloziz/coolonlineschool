import { KeepPlayingColorThemes } from '@app/enums/Enums';

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

export interface KeepPlayingItemProps {
  title: string;
  percentToComplete: number;
  className?: string;
  colorTheme: KeepPlayingColorThemes;
  id: number;
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
