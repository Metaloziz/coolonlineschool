import { ButtonColorThemes } from '@app/enums';
import { Button, ModalTextEditor, ModalAddPoints } from '@components';
import { IStudent } from '@components/elements/students-list/StudentsList';
import { useModal } from '@hooks';
import avatar from '@mock/public/avatar.png';
import statistics from '@svgs/studentsIcon/statistics.svg';
import Image from 'next/image';
import Link from 'next/link';

import { Question, Check, Camera, ButtonAdd } from './icons';
import styles from './StudentCard.module.scss';

interface BlockContactsProps {
  student: IStudent;
  isCheck?: boolean;
  isQuestion?: boolean;
  isCamera?: boolean;
}

const StudentCard = ({ isCheck, isQuestion, isCamera, student }: BlockContactsProps) => {
  const { studentName, city, status, pointsNumber, achievements } = student;

  const [isActiveAddPointModal, openAddPointModal, closeAddPointModal] = useModal();
  const [isActiveFeedbackModal, openFeedbackModal, closeFeedbackModal] = useModal();

  const achievementsMap = achievements.map(({ imageUrl, id }) => (
    <div key={id} className={styles.iconAchievement}>
      <Image alt="achievement" src={imageUrl} width={22} height={28} />
    </div>
  ));

  return (
    <div className={styles.blockPersonal}>
      <div className={styles.avatar}>
        <Image src={avatar} width={171} height={163} alt="avatar" className={styles.avatarImg} />
      </div>
      <div className={styles.information}>
        <div>
          <p className={styles.name}>{studentName}</p>
          <div className={styles.icons}>
            {isCheck !== undefined && <Check isCheck={isCheck} />}
            {isQuestion !== undefined && <Question isQuestion={isQuestion} />}
            {isCamera !== undefined && <Camera isCamera={isCamera} />}
          </div>
        </div>

        <div className={styles.wrapperInformation}>
          <div>
            <p className={styles.informationItem}>
              Статус:<span>{status}</span>
            </p>
            <p className={styles.informationItem}>
              Город:<span>{city}</span>
            </p>
            <div className={styles.wrapperInformationItem}>
              <p className={styles.informationItem}>
                Баллы:<span>{pointsNumber}</span>
              </p>
              <ButtonAdd openModal={openAddPointModal} />
              <ModalAddPoints
                isActive={isActiveAddPointModal}
                closeModal={closeAddPointModal}
                studentsName="Днепровский Александр Алексеевич"
              />
            </div>
            <div className={styles.wrapperAchievements}>
              {achievements && achievementsMap}
              <ButtonAdd openModal={() => {}} />
            </div>
          </div>
          <div className={styles.wrapperStatistics}>
            <div>
              <Link href="students">
                <a href="students" className={styles.statistics}>
                  Статистика
                  <Image src={statistics} alt="statistics" width={27} height={27} />
                </a>
              </Link>
            </div>
            <Button
              onClick={openFeedbackModal}
              colorTheme={ButtonColorThemes.red}
              className={styles.button}
            >
              Комментарий по Д/З
            </Button>
            <Button colorTheme={ButtonColorThemes.red} className={styles.button}>
              Изменить Д/З
            </Button>
          </div>
          <ModalTextEditor
            isActive={isActiveFeedbackModal}
            closeModal={closeFeedbackModal}
            studentsName="Днепровский Александр Алексеевич"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
