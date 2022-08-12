import { useState } from 'react';

import cl from '@components/elements/block-contacts/btn-delete-img/BtnDeleteImg.module.scss';
import btnDeleteImageHover from '@svgs/icons/delete-hover.svg';
import btnDeleteImage from '@svgs/icons/delete.svg';
import Image from 'next/image';

const BtnDeleteImg = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={cl.deleteItem}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Image
        src={hover ? btnDeleteImageHover : btnDeleteImage}
        alt="delete"
        width={20}
        height={24}
      />
    </div>
  );
};

export default BtnDeleteImg;
