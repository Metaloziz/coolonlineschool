import classNames from 'classnames';
import Image from 'next/image';
import styles from './Achievements.module.scss';

type BlockAchievementProps = {
  imageCard: string;
  isActive?: boolean;
  title: string;
};

const BlockAchievement = ({
  imageCard,
  isActive = true,
  title,
}: BlockAchievementProps) => {
  const linkClassNames = classNames(
    styles.blockAchievement,
    !isActive && styles.notActiveBlock,
  );
  return (
    <div className={linkClassNames}>
      <h3>{title}</h3>
      <div className={styles.img}>
        <Image src={imageCard} width={80} height={80} alt="achievement" />
      </div>
    </div>
  );
};

export default BlockAchievement;
