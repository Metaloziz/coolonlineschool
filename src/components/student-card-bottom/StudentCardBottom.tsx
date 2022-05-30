/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IStudentCard } from '@app/types';
import telegramImg from '@svgs/student-card/telegram-icon.svg';
import whatsappImg from '@svgs/student-card/whatsapp-icon.svg';
import { convertToString } from '@utils/Date';
import cl from './StudentCardBottom.module.scss';

type Props = Required<Pick<IStudentCard, 'chatsLinks' | 'nextLessonData'>>;

const StudentCardBottom: FC<Props> = ({
  chatsLinks: { telegramLink, whatsappLink },
  nextLessonData,
}) => {
  return (
    <>
      <div className={cl.linksToChats}>
        <span className={cl.linksToChatsText}>Ссылки на чаты:</span>
        <Link href={telegramLink}>
          <Image src={telegramImg} alt="telegram" />
        </Link>
        <Link href={whatsappLink}>
          <Image src={whatsappImg} alt="whatsapp" />
        </Link>
      </div>
      <div className={cl.nextLesson}>
        <span className={cl.nextLessonText}>Следующее занятие:</span>
        <span className={cl.nextLessonVisualiser}>
          {convertToString(nextLessonData)}
        </span>
      </div>
    </>
  );
};

export default StudentCardBottom;
