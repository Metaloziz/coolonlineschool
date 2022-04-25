import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { CardStudentProps } from '@app/types/ComponentsProps';
import CustomImageWrapper from '@components/custom-image-wrapper/CustomImageWrapper';
import avatar from '@images/avatar.png';
import telegram from '@svgs/card-student-telegram-icon.svg';
import whatsapp from '@svgs/card-student-whatsapp-icon.svg';
import zoom from '@svgs/card-student-zoom-icon.svg';
import styles from './CardStudent.module.scss';

const CardStudent: FC<CardStudentProps> = ({
  studentName,
  status,
  studentPoits,
  nextLesson,
  studentTag,
  className,
}) => {
  const sliderProgress = `${studentPoits * 20}%`;
  return (
    <div className={classNames(styles.container, className)}>
      <CustomImageWrapper width={181} height={173} className={styles.avatar}>
        <Image src={avatar} alt="student avatar" />
      </CustomImageWrapper>
      <div className={styles.studentNameContainer}>
        <div className={styles.studentName}>{studentName}</div>
        <div className={styles.studentTag}>student {studentTag}</div>
      </div>
      <div className={styles.studentInfo}>
        <span className={styles.studentInfoText}>Статус:</span>
        <span className={styles.studentInfoVisualiser}>{status}</span>
      </div>
      <div className={classNames(styles.studentInfo, styles.studentPoitsInfo)}>
        <span className={styles.studentInfoText}>Ваши очки:</span>
        <span className={styles.studentInfoVisualiser}>{studentPoits}</span>
        <div className={styles.slider}>
          <div
            style={{ width: sliderProgress }}
            className={styles.sliderProgress}
          ></div>
          <div
            style={{ right: sliderProgress }}
            className={styles.sliderIcon}
          ></div>
        </div>
        <span className={styles.studentPointsVisualiserBig}>
          {studentPoits}
        </span>
      </div>
      <button className={styles.zoomBtn}>
        <Image src={zoom} alt="zoom" />
      </button>
      <div className={styles.linksToChats}>
        <span className={styles.linksToChatsSpan}>Ссылки на чаты:</span>
        <button>
          <Image src={telegram} alt="telegram" />
        </button>
        <button>
          <Image src={whatsapp} alt="whatsapp" />
        </button>
      </div>
      <div className={styles.nextLesson}>
        <span className={styles.nextLessonSpan}>Следующее занятие:</span>
        <span className={styles.nextLessonVisualiser}>{nextLesson}</span>
      </div>
    </div>
  );
};

export default CardStudent;
