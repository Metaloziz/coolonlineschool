import classNames from 'classnames';
import Image from 'next/image';
import cl from './Achievements.module.scss';

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
    cl.blockAchievement,
    !isActive && cl.notActiveBlock,
  );
  return (
    <div className={linkClassNames}>
      <h3>{title}</h3>
      <div className={cl.img}>
        <Image src={imageCard} width={80} height={80} alt="achievement" />
      </div>
    </div>
  );
};

export default BlockAchievement;
