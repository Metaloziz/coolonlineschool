import add from '@svgs/btn-add-hover.svg';
import Image from 'next/image';

import style from './Icons.module.scss';

export const Add = () => (
  <div className={style.iconAdd}>
    <Image src={add} alt="check" width={25} height={25} />
  </div>
);
