import Image from 'next/image';
import logoImage from '@images/logo.png';

export function Logo() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        columnGap: '15px',
        alignItems: 'center',
      }}
    >
      <Image src={logoImage} alt="Тризум" />
    </div>
  );
}

export default Logo;
