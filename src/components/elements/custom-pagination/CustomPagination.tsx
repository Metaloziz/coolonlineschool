import { FC, useState } from 'react';

import classNames from 'classNames';

import styles from './CustomPagination.module.scss';
import PaginationNext from './pagination-next/PaginationNext';
import PaginationPrev from './pagination-prev/PaginationPrev';

interface Props {
  currentPage: number;
  perPage: number;
  total: number;
  paginate: (value: number) => void;
  prev: () => void;
  next: () => void;
}

const CustomPagination: FC<Props> = ({ currentPage, perPage, prev, next, total, paginate }) => {
  const [activeStepCount, setActiveStepCount] = useState(currentPage);

  const countPage = Math.ceil(total / perPage);
  const pageNumbers = Array.from({ length: countPage }, (_, i) => i);

  const isPrevDisabled = activeStepCount === 0;
  const isNextDisabled = activeStepCount === countPage - 1;

  const navigate = (page: number, cb: () => void) => {
    setActiveStepCount(page);
    cb();
  };

  const prevNavigate = () => {
    if (!isPrevDisabled) {
      navigate(activeStepCount - 1, prev);
    }
  };

  const nextNavigate = () => {
    if (!isNextDisabled) {
      navigate(activeStepCount + 1, next);
    }
  };

  const pageNavigate = (item: number) => {
    navigate(item, () => {
      paginate(item);
    });
  };

  return (
    <div className={styles.paginationWrapper}>
      <button
        disabled={isPrevDisabled}
        type="button"
        className={styles.prev}
        onClick={prevNavigate}
      >
        <PaginationPrev />
      </button>
      <ul className={styles.list}>
        {pageNumbers.map((item, i) => (
          <li
            className={classNames(styles.paginationItem, {
              [styles.activePaginate]: item === activeStepCount,
            })}
            key={item}
            onClick={() => pageNavigate(item)}
          >
            {item + 1}
          </li>
        ))}
      </ul>
      <button
        disabled={isNextDisabled}
        type="button"
        className={styles.next}
        onClick={nextNavigate}
      >
        <PaginationNext />
      </button>
    </div>
  );
};

export default CustomPagination;
