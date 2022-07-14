import { FC, useState } from 'react';

import PaginationNextArrow from '@pages/pagination-next-arrow/PaginationNextArrow';
import PaginationPrevArrow from '@pages/pagination-prev-arrow/PaginationPrevArrow';
import className from 'classnames';

import styles from './Step.module.scss';

interface StepProps {
  countStep: number;
  isRenderButtons?: boolean;
  onChange?: () => void;
}

const Step: FC<StepProps> = ({ countStep, isRenderButtons, onChange }) => {
  const [activeStepCount, setActiveStepCount] = useState(1);
  const steps = Array.from({ length: countStep }, (_, index) => index + 1);

  const setStep = (step: number) => {
    setActiveStepCount(step);
    onChange && onChange();
  };

  return (
    <div className={styles.step}>
      {isRenderButtons && (
        <button
          type="button"
          disabled={activeStepCount === 1}
          className={styles.prevBtn}
          onClick={() => setActiveStepCount(activeStepCount - 1)}
        >
          <PaginationPrevArrow />
        </button>
      )}
      <ul className={styles.countList}>
        {steps.map(item => (
          <li
            onClick={() => setStep(item)}
            key={item}
            className={className(styles.countItem, {
              [styles.activeItem]: item === activeStepCount,
            })}
          >
            {item}
          </li>
        ))}
      </ul>
      {isRenderButtons && (
        <button
          type="button"
          disabled={steps.length === activeStepCount}
          className={styles.nextBtn}
          onClick={() => setActiveStepCount(activeStepCount + 1)}
        >
          <PaginationNextArrow />
        </button>
      )}
    </div>
  );
};

export default Step;
