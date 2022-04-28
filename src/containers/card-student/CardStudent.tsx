import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { CardStudentProps } from '@app/types/Props';
import CardStudentBottom from '@components/card-student-bottom/CardStudentBottom';
import CardStudentMainButton from '@components/card-student-main-button/CardStudentMainButton';
import CardStudentSlider from '@components/card-student-slider/CardStudentSlider';
import CustomImageWrapper from '@components/custom-image-wrapper/CustomImageWrapper';
import avatar from '@images/avatar.png';
import zoomIcon from '@svgs/card-student/zoom-icon.svg';
import styles from './CardStudent.module.scss';

const CardStudent: FC<CardStudentProps> = ({
  options: {
    studentName,
    status,
    geo = '',
    pointsNumber = 0,
    tag = 0,
    chatsLinks = { whatsappLink: '', telegramLink: '' },
    nextLessonData = '',
  },
  className,
}) => {
  const isMinimal = !pointsNumber;

  const isNormal =
    !!pointsNumber && !tag && !chatsLinks.whatsappLink && !nextLessonData;

  const isExtended =
    !!pointsNumber &&
    !!tag &&
    !!chatsLinks.whatsappLink &&
    !!chatsLinks.telegramLink &&
    !!nextLessonData;

  return (
    <div
      className={classNames(styles.container, className, {
        [styles.containerExtended]: isExtended,
        [styles.containerMinimal]: isMinimal,
      })}
    >
      {isMinimal ? (
        <CustomImageWrapper isBordered={false} className={styles.avatar}>
          <Image layout="responsive" src={avatar} alt="student avatar" />
        </CustomImageWrapper>
      ) : (
        <CustomImageWrapper className={styles.avatar}>
          <Image layout="responsive" src={avatar} alt="student avatar" />
        </CustomImageWrapper>
      )}

      <div className={styles.studentNameContainer}>
        <div className={styles.studentName}>{studentName}</div>
        {isExtended && <div className={styles.tag}>student {tag}</div>}
      </div>
      <div className={styles.info}>
        <span className={styles.infoText}>Статус:</span>
        <span className={styles.infoVisualiser}>{status}</span>
      </div>
      {(isNormal || isExtended) && (
        <div className={classNames(styles.info, styles.pointsInfo)}>
          <span className={styles.infoText}>Ваши очки:</span>
          <span className={styles.infoVisualiser}>{pointsNumber}</span>
          {isExtended && (
            <>
              <CardStudentSlider {...{ pointsNumber }} />
              <span className={styles.pointsVisualiser}>{pointsNumber}</span>
            </>
          )}
        </div>
      )}
      {(isMinimal || isNormal) && (
        <div className={styles.info}>
          <span className={styles.infoText}>Город:</span>
          <span className={styles.infoVisualiser}>{geo}</span>
        </div>
      )}
      {isNormal && <CardStudentMainButton text="Добавить новый урок" />}
      {isExtended && (
        <CardStudentMainButton
          text="ZOOM"
          Image={<Image src={zoomIcon} alt="zoom" />}
        />
      )}
      {isExtended && <CardStudentBottom {...{ chatsLinks, nextLessonData }} />}
    </div>
  );
};

export default CardStudent;
