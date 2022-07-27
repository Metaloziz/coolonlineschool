import { FC } from 'react';

import { ICell } from '@app/types';
import { getRandomId } from '@utils/RandomId';
import classNames from 'classnames';
import cl from 'src/components/elements/table-row/TableRow.module.scss';

interface ITableRow {
  row: ICell[];
  className: string;
}

const TableRow: FC<ITableRow> = ({ row, className }) => (
  <div className={classNames(cl.container, className)}>
    {row.map(cell => (
      <span className={cl.item} key={getRandomId()}>
        {cell}
      </span>
    ))}
  </div>
);

export default TableRow;
