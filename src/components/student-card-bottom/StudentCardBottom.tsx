/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import { FC } from 'react';
import { IStudentCard } from '@app/types';
import telegramImg from '@svgs/student-card/telegram-icon.svg';
import whatsappImg from '@svgs/student-card/whatsapp-icon.svg';
import { convertToDateString, convertToTimeString } from '@utils/Date';
import cl from './StudentCardBottom.module.scss';

type Props = Required<Pick<IStudentCard, 'chatsLinks' | 'nextLessonData'>>;

const StudentCardBottom: FC<Props> = ({
  chatsLinks: { telegram, whatsapp },
  nextLessonData,
}) => {
  return (
    <>
      <div className={cl.linksToChats}>
        <span className={cl.linksToChatsText}>Ссылки на чаты:</span>
        <a href={telegram} target="_blank" rel="noreferrer">
          <Image src={telegramImg} alt="telegram" />
        </a>
        <a href={whatsapp} target="_blank" rel="noreferrer">
          <Image src={whatsappImg} alt="whatsapp" />
        </a>
      </div>
      <div className={cl.nextLesson}>
        <span className={cl.nextLessonText}>Следующее занятие:</span>
        <span className={cl.nextLessonVisualiser}>
          {`${convertToDateString(nextLessonData)} в ${convertToTimeString(
            nextLessonData,
          )}`}
        </span>
      </div>
    </>
  );
};

export default StudentCardBottom;
