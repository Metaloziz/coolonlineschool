import Image from 'next/image';
import style from '@pages/students/studentsList/studentCard/icons/Icons.module.scss';
import questionTrue from '@svgs/studentsIcon/question.svg';
import questionFalse from '@svgs/studentsIcon/questionFalse.svg';

type QuestionProps = {
  isQuestion: boolean;
};

export const Question = ({ isQuestion }: QuestionProps) => {
  return isQuestion ? (
    <div className={style.icon}>
      <Image src={questionTrue} alt={'question'} width={22} height={22} />
    </div>
  ) : (
    <div className={style.icon}>
      <Image src={questionFalse} alt={'question'} width={22} height={22} />
    </div>
  );
};
