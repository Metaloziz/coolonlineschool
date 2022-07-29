import { FC } from 'react';

import arrow from '@svgs/arrow-footer 1.svg';
import Image from 'next/image';
import styles from 'src/components/elements/custom-button/CustomButton.module.scss';

type CustomButtonType = {
  title: string;
  onClick?: () => void;
};

const CustomButton: FC<CustomButtonType> = props => {
  const { title, onClick } = props;
  return (
    <div onClick={onClick} className={styles.button}>
      <div>{title}</div>
      <Image className={styles.image} src={arrow} />
    </div>
  );
};

export default CustomButton;
