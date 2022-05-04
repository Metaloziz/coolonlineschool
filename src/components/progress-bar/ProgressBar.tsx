import classNames from 'classnames';
import { FC } from 'react';
import { ProgressBarSizes } from '@app/enums/Enums';
import { ProgressBarProps } from '@app/types/Props';
import styles from './ProgressBar.module.scss';

const ProgressBar: FC<ProgressBarProps> = ({
  title,
  percentToComplete: percent,
  colorTheme,
  className,
  size = 'normal',
  children,
}) => {
  percent < 0 && (percent = 0);
  percent > 100 && (percent = 100);

  const isBig = size === ProgressBarSizes.big;
  const isNormal = size === ProgressBarSizes.normal;
  const radius = isBig ? 130 : 55;
  const c = Math.PI * (radius * 2);
  const pct = ((100 - percent) / 100) * c;

  const svgSize = isBig ? 310 : 150;
  const circlePos = svgSize / 2;

  return (
    <div
      className={classNames(
        styles.container,
        styles[colorTheme],
        styles[size],
        className,
      )}
    >
      <div className={styles.innerContainer}>
        <svg
          width={svgSize}
          height={svgSize}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={styles.circle}
            r={radius}
            cx={circlePos}
            cy={circlePos}
            strokeDashoffset={0}
            strokeDasharray={c}
            strokeWidth={isBig ? 30 : 20}
          ></circle>
          <circle
            className={styles.bar}
            r={radius}
            cx={circlePos}
            cy={circlePos}
            strokeDashoffset={pct}
            strokeDasharray={c}
            strokeWidth={isBig ? 50 : 40}
          ></circle>
        </svg>
        {isBig ? (
          <span className={styles.percentToComplete}>{percent}%</span>
        ) : (
          children
        )}
      </div>
      {isNormal && <span className={styles.percentToComplete}>{percent}%</span>}
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default ProgressBar;
