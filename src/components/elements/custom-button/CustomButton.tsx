import { FC } from 'react';

import arrow from '@public/svgs/arrow-footer 1.svg';
import cn from 'classnames';
import Image from 'next/image';

import styles from './CustomButton.module.scss';

type CustomButtonType = {
  title: string;
  className?: string;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
};

const CustomButton: FC<CustomButtonType> = props => {
  const { title, className, onClick, type } = props;
  return (
    <button type={type} className={cn(styles.button, className)} onClick={onClick}>
      <div>{title}</div>
      <Image className={styles.image} src={arrow} />
    </button>
  );
};

export default CustomButton;
