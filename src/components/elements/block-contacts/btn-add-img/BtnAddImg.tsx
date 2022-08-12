import { useState } from 'react';

import cl from '@components/elements/block-contacts/btn-add-img/BtnAddImg.module.scss';
import btnAddImageHover from '@svgs/icons/add-hover.svg';
import btnAddImage from '@svgs/icons/add.svg';
import Image from 'next/image';

const BtnAddImg = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className={cl.add} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <Image src={hover ? btnAddImageHover : btnAddImage} alt="edit" width={90} height={90} />
    </div>
  );
};

export default BtnAddImg;
