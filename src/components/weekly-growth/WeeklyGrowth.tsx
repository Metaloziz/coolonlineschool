import classNames from 'classnames';
import { FC } from 'react';
import { SkillGrowProps } from '@app/types/Props';
import SkillGrow from './skill-grow/SkillGrow';
import styles from './WeeklyGrowth.module.scss';

interface Props {
  className?: string;
  weeklyGrowth: SkillGrowProps[];
}

const WeeklyGrowth: FC<Props> = ({ weeklyGrowth, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <span className={styles.title}>Рост за неделю</span>
      <div className={styles.itemsContainer}>
        {weeklyGrowth.map((weeklyGrowth) => (
          <SkillGrow key={weeklyGrowth.id} {...weeklyGrowth}></SkillGrow>
        ))}
      </div>
    </div>
  );
};

export default WeeklyGrowth;
