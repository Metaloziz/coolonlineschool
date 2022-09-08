import { FC, useState } from 'react';

import cl from '@components/elements/block-contacts/btn-edit-img/BtnEditImg.module.scss';
import btnEditImageHover from '@svgs/icons/edit-hover.svg';
import btnEditImage from '@svgs/icons/edit.svg';
import Image from 'next/image';

interface Props {
  onClick: () => void;
}

const BtnEditImg: FC<Props> = ({ onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      className={cl.edit}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Image src={hover ? btnEditImageHover : btnEditImage} alt="edit" width={22} height={23} />
    </div>
  );
};

export default BtnEditImg;
