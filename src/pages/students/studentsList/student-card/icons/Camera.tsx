import cameraTrue from '@svgs/studentsIcon/camera.svg';
import CameraFalse from '@svgs/studentsIcon/cameraFalse.svg';
import Image from 'next/image';

import style from './Icons.module.scss';

interface CameraProps {
  isCamera: boolean;
}

export const Camera = ({ isCamera }: CameraProps) =>
  isCamera ? (
    <div className={style.icon}>
      <Image className={style.icon} src={cameraTrue} alt="camera" width={22} height={22} />
    </div>
  ) : (
    <div className={style.icon}>
      <Image className={style.icon} src={CameraFalse} alt="camera" width={22} height={22} />
    </div>
  );
