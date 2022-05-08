/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ICardStudentOptions } from '@app/types/Props';
import telegramImg from '@svgs/card-student/telegram-icon.svg';
import whatsappImg from '@svgs/card-student/whatsapp-icon.svg';
import { convertToString } from '@utils/Date';
import styles from './CardStudentBottom.module.scss';

type Props = Required<
  Pick<ICardStudentOptions, 'chatsLinks' | 'nextLessonData'>
>;

const CardStudentBottom: FC<Props> = ({
  chatsLinks: { telegramLink, whatsappLink },
  nextLessonData,
}) => {
  return (
    <>
      <div className={styles.linksToChats}>
        <span className={styles.linksToChatsText}>Ссылки на чаты:</span>
        <Link href={telegramLink}>
          <Image src={telegramImg} alt="telegram" />
        </Link>
        <Link href={whatsappLink}>
          <Image src={whatsappImg} alt="whatsapp" />
        </Link>
      </div>
      <div className={styles.nextLesson}>
        <span className={styles.nextLessonText}>Следующее занятие:</span>
        <span className={styles.nextLessonVisualiser}>
          {convertToString(nextLessonData)}
        </span>
      </div>
    </>
  );
};

export default CardStudentBottom;
