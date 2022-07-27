import { FC } from 'react';

import styles from 'src/components/elements/admin-info-list/admin-info-item/AdminInfoItem.module.scss';

interface Props {
  title: string;
  value: number;
}

const AdminInfoItem: FC<Props> = ({ title, value }) => (
  <div className={styles.content}>
    <p>{title}</p>
    <span>{value}</span>
  </div>
);

export default AdminInfoItem;
