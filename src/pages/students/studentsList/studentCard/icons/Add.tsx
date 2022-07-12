import Image from 'next/image';
import add from '@svgs/btn-add-hover.svg';
import style from './Icons.module.scss';

export const Add = () => {
  return (
    <div className={style.iconAdd}>
      <Image src={add} alt={'check'} width={25} height={25} />
    </div>
  );
};
