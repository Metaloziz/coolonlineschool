import { FC } from 'react';

import arrow from '@public/svgs/arrow-footer 1.svg';
import Image from 'next/image';

import styles from './CustomButton.module.scss';

type CustomButtonType = {
  title: string;
};

const CustomButton: FC<CustomButtonType> = props => {
  const { title } = props;
  return (
    <div className={styles.button}>
      <div>{title}</div>
      <Image className={styles.image} src={arrow} />
    </div>
  );
};

export default CustomButton;