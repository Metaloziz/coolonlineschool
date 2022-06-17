import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import { IStudentCard } from '@app/types';
import {
  Button,
  StudentCardBottom,
  StudentCardSlider,
  CustomImageWrapper,
} from '@components';
import avatar from '@mock/public/avatar.png';
import zoomIcon from '@svgs/button/zoom-icon.svg';
import cl from './StudentCard.module.scss';

export interface IStudentCardWithCl {
  options: IStudentCard;
  className?: string;
}

const StudentCard: FC<IStudentCardWithCl> = ({
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
              <span className={cl.pointsVisualiser}>{pointsNumber}</span>
            </>
          )}
        </div>
      )}
      {(isMinimal || isNormal) && (
        <div className={cl.info}>
          <span className={cl.infoText}>Город:</span>
          <span className={cl.infoVisualiser}>{geo}</span>
        </div>
      )}
      {isNormal && (
        <Button
          colorTheme={ButtonColorThemes.blueGradient}
          text="Добавить новый урок"
          className={cl.addNewLessonBtn}
        />
      )}
      {isExtended && (
        <Button
          className={cl.zoomBtn}
          text="ZOOM"
          colorTheme={ButtonColorThemes.blueGradient}
          image={<Image src={zoomIcon} alt="ZOOM" />}
        />
      )}
      {isExtended && <StudentCardBottom {...{ chatsLinks, nextLessonData }} />}
    </div>
  );
};

export default StudentCard;
