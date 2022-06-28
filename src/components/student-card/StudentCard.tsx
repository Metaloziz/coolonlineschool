import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { ButtonColorThemes, IconVariants } from '@app/enums';
import { IStudentCard } from '@app/types';
import {
  Button,
  StudentCardBottom,
  StudentCardSlider,
  CustomImageWrapper,
} from '@components';
import { IconSvg } from '@components/svg';
import avatar from '@mock/public/avatar.png';
import cl from './StudentCard.module.scss';

export interface IStudentCardWithCl {
  options: IStudentCard;
  className?: string;
}

const StudentCard: FC<IStudentCardWithCl> = ({
  options: {
    studentName,
    status,
    city,
    pointsNumber,
    tag,
    chatsLinks,
    nextLessonData,
    classroomZoomLink = '',
  },
  className,
}) => {
  const isMinimal = !pointsNumber;

  const isNormal = !!pointsNumber && !tag && !chatsLinks && !nextLessonData;

  const isExtended =
    !!pointsNumber &&
    !!tag &&
    !!chatsLinks &&
    !!chatsLinks.whatsapp &&
    !!chatsLinks.telegram &&
    !!nextLessonData;

  return (
    <div
      className={classNames(cl.container, className, {
        [cl.containerExtended]: isExtended,
        [cl.containerMinimal]: isMinimal,
      })}
    >
      {isMinimal ? (
        <CustomImageWrapper isBordered={false} className={cl.avatar}>
          <Image layout="responsive" src={avatar} alt="student avatar" />
        </CustomImageWrapper>
      ) : (
        <CustomImageWrapper className={cl.avatar}>
          <Image layout="responsive" src={avatar} alt="student avatar" />
        </CustomImageWrapper>
      )}

      <div className={cl.studentNameContainer}>
        <div className={cl.studentName}>{studentName}</div>
        {isExtended && <div className={cl.tag}>student {tag}</div>}
      </div>
      <div className={cl.info}>
        <span className={cl.infoText}>Статус:</span>
        <span className={cl.infoVisualiser}>{status}</span>
      </div>
      {(isNormal || isExtended) && (
        <div className={classNames(cl.info, cl.pointsInfo)}>
          <span className={cl.infoText}>Ваши очки:</span>
          <span className={cl.infoVisualiser}>{pointsNumber}</span>
          {isExtended && (
            <>
              <StudentCardSlider {...{ pointsNumber }} />
              <div className={cl.fiveImage}></div>
            </>
          )}
        </div>
      )}
      {(isMinimal || isNormal) && (
        <div className={cl.info}>
          <span className={cl.infoText}>Город:</span>
          <span className={cl.infoVisualiser}>{city}</span>
        </div>
      )}
      {isNormal && (
        <Button
          colorTheme={ButtonColorThemes.blueGradient}
          className={cl.addNewLessonBtn}
        >
          Добавить новый урок
        </Button>
      )}
      {isExtended && (
        <a href={classroomZoomLink} target="_blank" rel="noreferrer">
          <Button
            className={cl.zoomBtn}
            colorTheme={ButtonColorThemes.blueGradient}
            icon={
              <IconSvg
                fill="white"
                width={19}
                height={13}
                icon={IconVariants.zoom}
              />
            }
          >
            ZOOM
          </Button>
        </a>
      )}
      {isExtended && <StudentCardBottom {...{ chatsLinks, nextLessonData }} />}
    </div>
  );
};

export default StudentCard;
