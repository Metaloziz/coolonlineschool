import { FC } from 'react';

import { items } from '@mock/moks-data-admininfolist';
import cn from 'classnames';

import AdminInfoItem from './admin-info-item/AdminInfoItem';

interface Props {
  className?: string;
}

const AdminInfoList: FC<Props> = ({ className }) => (
  <div className={cn(className)}>
    {items.map(item => (
      <AdminInfoItem key={item.id} title={item.title} value={item.value} />
    ))}
  </div>
);

export default AdminInfoList;
