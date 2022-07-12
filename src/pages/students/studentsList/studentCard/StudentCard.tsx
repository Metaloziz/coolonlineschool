import Image from 'next/image';
import { Button } from '@components';
import avatar from '@mock/public/avatar.png';
import { Add } from '@pages/students/studentsList/studentCard/icons/Add';
import { Camera } from '@pages/students/studentsList/studentCard/icons/Camera';
import { Check } from '@pages/students/studentsList/studentCard/icons/Check';
import { Question } from '@pages/students/studentsList/studentCard/icons/Question';
import styles from '@pages/students/studentsList/studentCard/StudentCard.module.scss';
import { IStudent } from '@pages/students/studentsList/StudentsList';
import statistics from '@svgs/studentsIcon/statistics.svg';

interface BlockContactsProps {
  student: IStudent;
  isCheck?: boolean;
  isQuestion?: boolean;
  isCamera?: boolean;
}

const StudentCard = ({
  isCheck,
  isQuestion,
  isCamera,
  student,
}: BlockContactsProps) => {
  const { studentName, city, status, pointsNumber, achievements } = student;

  const achievementsMap = achievements.map(({ title, imageUrl }, index) => {
    return (
      <div key={title + index} className={styles.iconAchievement}>
        <Image alt={'achievement'} src={imageUrl} width={22} height={28} />
      </div>
    );
  });

  return (
    <div className={styles.blockPersonal}>
      <div className={styles.avatar}>
        <Image
          src={avatar}
          width={171}
          height={163}
          alt="avatar"
          className={styles.avatarImg}
        />
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

        <div className={styles.informationWrapper}>
          <div>
            <p className={styles.informationItem}>
              Статус:<span>{status}</span>
            </p>
            <p className={styles.informationItem}>
              Город:<span>{city}</span>
            </p>
            <div style={{ display: 'flex' }}>
              <p className={styles.informationItem}>
                Баллы:<span>{pointsNumber}</span>
              </p>
              <Add />
            </div>
            <div className={styles.wrapperAchievements}>
              {achievements && achievementsMap}
              <Add />
            </div>
          </div>
          <div
            style={{
              alignSelf: 'self-end',
              display: 'flex',
              alignItems: 'self-end',
              flexDirection: 'column',
            }}
          >
            <div style={{ marginBottom: '29px' }}>
              <a className={styles.statistics}>
                Статистика
                <Image
                  src={statistics}
                  alt={'statistics'}
                  width={27}
                  height={27}
                />
              </a>
            </div>
            <Button colorTheme={'red'} className={styles.button}>
              Комментарий по Д/З
            </Button>
            <Button colorTheme={'red'} className={styles.button}>
              Изменить Д/З
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
