import { FC } from 'react';

import { ProgressBarSizes } from '@app/enums';
import { IProgressBar } from '@app/types';
import classNames from 'classnames';
import cl from 'src/components/elements/progress-bar/ProgressBar.module.scss';

const ProgressBar: FC<IProgressBar> = ({
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
    <div className={classNames(cl.container, cl[colorTheme], className)}>
      <div className={cl.innerContainer}>
        <svg width={svgSize} height={svgSize} version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle
            className={cl.circle}
            r={radius}
            cx={circlePos}
            cy={circlePos}
            strokeDashoffset={0}
            strokeDasharray={c}
            strokeWidth={isBig ? 30 : 20}
          />
          <circle
            className={cl.bar}
            r={radius}
            cx={circlePos}
            cy={circlePos}
            strokeDashoffset={pct}
            strokeDasharray={c}
            strokeWidth={isBig ? 50 : 40}
          />
        </svg>
        {isBig ? <span className={cl.percentToComplete}>{percent}%</span> : children}
      </div>
      {isNormal && <span className={cl.percentToComplete}>{percent}%</span>}
      <span className={cl.title}>{title}</span>
    </div>
  );
};

export default ProgressBar;
