import Image from 'next/image';
import { useState } from 'react';
import btnAddImageHover from '@svgs/btn-add-hover.svg';
import btnAddImage from '@svgs/btn-add.svg';
import styles from './BtnAddImg.module.scss';

const BtnAddImg = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles.add}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Image
        src={hover ? btnAddImageHover : btnAddImage}
        alt={'edit'}
        width={90}
        height={90}
      />
    </div>
  );
};

export default BtnAddImg;
