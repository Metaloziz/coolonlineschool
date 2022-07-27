import { IStudentCard } from '@app/types';
import avatar from '@mock/public/avatar.png';
import classnames from 'classnames';
import Image from 'next/image';
import styles from 'src/components/elements/card-students/card-student-cheking-homework/CardStudentCheckingHomework.module.scss';

interface StudentCardProps {
  student: IStudentCard;
  className?: string;
}

const CardStudentCheckingHomework = ({ student, className }: StudentCardProps) => {
  const { studentName, teacher, city, status } = student;

  return (
    <div className={classnames(styles.blockPersonal, className)}>
      <div className={styles.avatar}>
        <Image src={avatar} width={171} height={163} alt="avatar" className={styles.avatarImg} />
      </div>

      <div className={styles.information}>
        <div>
          <p className={styles.name}>{studentName}</p>
        </div>

        <div className={styles.wrapperInformation}>
          <div>
            <p className={styles.informationItem}>
              Статус:<span>{status}</span>
            </p>
            <p className={styles.informationItem}>
              Город:<span>{city}</span>
            </p>
            <p className={styles.informationItem}>
              Учитель:<span>{teacher}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStudentCheckingHomework;
