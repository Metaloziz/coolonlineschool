import checkTrue from '@svgs/studentsIcon/check.svg';
import checkFalse from '@svgs/studentsIcon/checkFalse.svg';
import Image from 'next/image';

import style from './Icons.module.scss';

interface CheckProps {
  isCheck: boolean;
}

export const Check = ({ isCheck }: CheckProps) =>
  isCheck ? (
    <div className={style.icon}>
      <Image src={checkTrue} alt="check" width={22} height={22} />
    </div>
  ) : (
    <div className={style.icon}>
      <Image src={checkFalse} alt="check" width={22} height={22} />
    </div>
  );
