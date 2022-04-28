import Image from 'next/image';
import lockImage from '@svgs/lock-image.svg';
import styles from './BaseImg.module.scss';

const BaseImg = () => {
  return (
    <div className={styles.base}>
      <p>Основной</p>
      <div>
        <Image src={lockImage} alt={'lock'} width={14} height={16} />
      </div>
    </div>
  );
};

export default BaseImg;
