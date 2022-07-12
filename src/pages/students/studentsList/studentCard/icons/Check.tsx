import Image from 'next/image';
import checkTrue from '@svgs/studentsIcon/check.svg';
import checkFalse from '@svgs/studentsIcon/checkFalse.svg';
import style from './Icons.module.scss';

type CheckProps = {
  isCheck: boolean;
};

export const Check = ({ isCheck }: CheckProps) => {
  return isCheck ? (
    <div className={style.icon}>
      <Image src={checkTrue} alt={'check'} width={22} height={22} />
    </div>
  ) : (
    <div className={style.icon}>
      <Image src={checkFalse} alt={'check'} width={22} height={22} />
    </div>
  );
};
