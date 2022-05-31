import Image from 'next/image';
import logoImage from '@images/logo.png';
import cl from './Logo.module.scss';

export function Logo() {
  return (
    <div className={cl.container}>
      <Image src={logoImage} alt="Тризум" />
      <div className={cl.logoName}>
        <strong className={cl.red}>Школа </strong>
        <strong className={cl.blue}>развития </strong>
        <strong className={cl.violet}>интеллекта</strong>
      </div>
    </div>
  );
}

export default Logo;
