import Image from 'next/image';
import { useState } from 'react';
import btnDeleteImageHover from '@svgs/delete-image-hover.svg';
import btnDeleteImage from '@svgs/delete-image.svg';
import styles from './BtnDeleteImg.module.scss';

const BtnDeleteImg = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles.delete}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Image
        src={hover ? btnDeleteImageHover : btnDeleteImage}
        alt={'delete'}
        width={20}
        height={24}
      />
    </div>
  );
};

export default BtnDeleteImg;
