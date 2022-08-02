import { FC } from 'react';

import arrow from '@public/svgs/arrow-footer 1.svg';
import cn from 'classnames';
import Image from 'next/image';

import styles from './CustomButton.module.scss';

type CustomButtonType = {
  title: string;
  className?: string;
  onClick?: () => void;
};

const CustomButton: FC<CustomButtonType> = props => {
  const { title, className, onClick } = props;
  return (
    <div className={cn(styles.button, className)} onClick={onClick}>
      <div>{title}</div>
      <Image className={styles.image} src={arrow} />
    </div>
  );
};

export default CustomButton;
