import add from '@svgs/btn-add-hover.svg';
import Image from 'next/image';

import style from './Icons.module.scss';

interface AddPointsButtonProps {
  openModal: () => void;
}

export const ButtonAdd = ({ openModal }: AddPointsButtonProps) => (
  <div onClick={openModal} className={style.iconAdd}>
    <Image src={add} alt="check" width={25} height={25} />
  </div>
);
