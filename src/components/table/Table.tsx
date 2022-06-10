import classNames from 'classnames';
import { FC } from 'react';
import { IRow } from '@app/types';
import { TableRow } from '@components';
import { getRandomId } from '@utils/RandomId';
import cl from './Table.module.scss';

interface ITable {
  headers: [string, string][];
  rows: IRow[];
  className?: string;
  gridClassName: string;
}

const Table: FC<ITable> = ({ rows, className, headers, gridClassName }) => {
  return (
    <div className={classNames(cl.container, className)}>
      <div className={classNames(cl.rowHeader, gridClassName)}>
        {headers.map(([key, value]) => (
          <span key={key}>{value}</span>
        ))}
      </div>
      {rows.map((row) => {
        const rowValues = headers.map(([key]) => row[key]);
        return (
          <TableRow
            key={getRandomId()}
            row={rowValues}
            className={gridClassName}
          />
        );
      })}
    </div>
  );
};

export default Table;
