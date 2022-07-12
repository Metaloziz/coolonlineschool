import Image from 'next/image';
import cameraTrue from '@svgs/studentsIcon/camera.svg';
import CameraFalse from '@svgs/studentsIcon/cameraFalse.svg';
import style from './Icons.module.scss';
type CameraProps = {
  isCamera: boolean;
};

export const Camera = ({ isCamera }: CameraProps) => {
  return isCamera ? (
    <div className={style.icon}>
      <Image
        className={style.icon}
        src={cameraTrue}
        alt={'camera'}
        width={22}
        height={22}
      />
    </div>
  ) : (
    <div className={style.icon}>
      <Image
        className={style.icon}
        src={CameraFalse}
        alt={'camera'}
        width={22}
        height={22}
      />
    </div>
  );
};
