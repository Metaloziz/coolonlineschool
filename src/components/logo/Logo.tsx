import logoImage from '@images/logo.png';
import Image from 'next/image';

import cl from './Logo.module.scss';

export const Logo = () => (
  <div className={cl.container}>
    <div className={cl.imgBlock}>
      <Image src={logoImage} alt="Тризум" />
    </div>
    <div className={cl.logoName}>
      <strong className={cl.red}>Школа </strong>
      <strong className={cl.blue}>развития </strong>
      <strong className={cl.violet}>интеллекта</strong>
    </div>
  </div>
);

export default Logo;
