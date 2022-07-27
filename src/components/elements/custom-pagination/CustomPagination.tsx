import { FC } from 'react';

import styles from './CustomPagination.module.scss';
import PaginationNext from './pagination-next/PaginationNext';
import PaginationPrev from './pagination-prev/PaginationPrev';

interface Props {
  count: number;
  total: number;
  paginate: (value: number) => void;
  prev: () => void;
  next: () => void;
}

const CustomPagination: FC<Props> = ({ count, total, paginate, prev, next }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / count); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.paginationWrapper}>
      <button type="button" className={styles.prev} onClick={() => prev()}>
        <PaginationPrev />
      </button>
      <ul className={styles.list}>
        {pageNumbers.map(item => (
          <li className={styles.paginationItem} key={item} onClick={() => paginate(item)}>
            {item}
          </li>
        ))}
      </ul>
      <button type="button" className={styles.next} onClick={() => next()}>
        <PaginationNext />
      </button>
    </div>
  );
};

export default CustomPagination;
