import React, { FC } from 'react';

import styles from './BlueButton.module.scss';

type Props = {
  title: string;
  onClick: () => void;
  isActive?: boolean;
  type?: 'small';
};
const BlueButton: FC<Props> = props => {
  const { title, onClick, isActive, type } = props;
  const className = `${styles.item} ${isActive ? styles.itemActive : ''} ${
    type === 'small' ? styles.itemSmall : ''
  }`;
  return (
    <div className={className} onClick={onClick}>
      {title}
    </div>
  );
};

export default BlueButton;
