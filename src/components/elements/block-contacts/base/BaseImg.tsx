import cl from '@components/elements/block-contacts/base/BaseImg.module.scss';
import lockImage from '@svgs/lock-image.svg';
import Image from 'next/image';

const BaseImg = () => (
  <div className={cl.base}>
    <p>Основной</p>
    <div>
      <Image src={lockImage} alt="lock" width={14} height={16} />
    </div>
  </div>
);

export default BaseImg;
