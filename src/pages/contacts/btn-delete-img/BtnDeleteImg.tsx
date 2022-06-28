import Image from 'next/image';
import { useState } from 'react';
import btnDeleteImageHover from '@svgs/icons/delete-hover.svg';
import btnDeleteImage from '@svgs/icons/delete.svg';
import cl from './BtnDeleteImg.module.scss';

const BtnDeleteImg = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={cl.delete}
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
