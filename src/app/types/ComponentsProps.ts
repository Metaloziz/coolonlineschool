// Containers

export interface WeeklyGrowthProps {
  className?: string;
  weeklyGrowth: SkillGrowProps[];
}
export interface HomeworksProps {
  className?: string;
  homeworks: HomeworkProps[];
}

export interface KeepPlayingProps {
  className?: string;
  games: KeepPlayingItemProps[];
}

export type CardStudentProps = {
  studentName: string;
  status: string;
  studentPoits: number;
  nextLesson: string;
  studentTag: number;
  className?: string;
};

export type TeacherCommentProps = {
  className?: string;
  commentDate: string;
  comment: string;
};

export type SelectHomeworksFormProps = {
  className?: string;
  years: number[];
  months: number[];
  lessonNumbers: number[];
};

type SliderItem = {
  text: string;
  isActive: boolean;
};

export type SliderProps = {
  className?: string;
  sliderItems: [SliderItem, SliderItem];
};

// Components

export interface KeepPlayingItemProps {
  title: string;
  percentToComplete: number;
  className?: string;
  colorTheme: 'red' | 'blue' | 'yellow-light' | 'violet' | 'green' | 'yellow';
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
export interface SkillGrowProps {
  skillTitle: string;
  color: string;
  percents: number;
  id: number;
}
export interface PanelProps {
  children: string;
  className?: string;
}

export interface ButtonProps {
  className?: string;
  text: string;
  colorTheme?: 'red' | 'blue';
}
