import classNames from 'classnames';
import { FC } from 'react';
import { ICell } from '@app/types';
import { getRandomId } from '@utils/RandomId';
import cl from './TableRow.module.scss';

interface ITableRow {
  row: ICell[];
  className: string;
}

const TableRow: FC<ITableRow> = ({ row, className }) => {
  return (
    <div className={classNames(cl.container, className)}>
      {row.map((cell) => (
        <span className={cl.item} key={getRandomId()}>
          {cell}
        </span>
      ))}
    </div>
  );
};

export default TableRow;
