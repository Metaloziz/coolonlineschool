import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import { CardStudentProps } from '@app/types/Props';
import {
  Button,
  CardStudentBottom,
  CardStudentSlider,
  CustomImageWrapper,
} from '@components';
import avatar from '@mock/public/avatar.png';
import zoomIcon from '@svgs/button/zoom-icon.svg';
import styles from './CardStudent.module.scss';

const CardStudent: FC<CardStudentProps> = ({
  options: {
    studentName,
    status,
    geo,
    pointsNumber,
    tag,
    chatsLinks,
    nextLessonData,
  },
  className,
}) => {
  const isMinimal = !pointsNumber;

  const isNormal = !!pointsNumber && !tag && !chatsLinks && !nextLessonData;

  const isExtended =
    !!pointsNumber &&
    !!tag &&
    !!chatsLinks &&
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
      {isNormal && (
        <Button
          colorTheme={ButtonColorThemes.blueGradient}
          text="Добавить новый урок"
          className={styles.addNewLessonBtn}
        />
      )}
      {isExtended && (
        <Button
          className={styles.zoomBtn}
          text="ZOOM"
          colorTheme={ButtonColorThemes.blueGradient}
          image={<Image src={zoomIcon} alt="ZOOM" />}
        />
      )}
      {isExtended && <CardStudentBottom {...{ chatsLinks, nextLessonData }} />}
    </div>
  );
};

export default CardStudent;
