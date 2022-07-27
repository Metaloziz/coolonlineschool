import { FC } from 'react';

import { IStudentCard } from '@app/types';
import cl from 'src/components/elements/student-card-slider/StudentCardSlider.module.scss';

type Props = Required<Pick<IStudentCard, 'pointsNumber'>>;

const StudentCardSlider: FC<Props> = ({ pointsNumber }) => {
  const sliderProgress = `${pointsNumber * 20}%`;
  return (
    <div className={cl.slider}>
      <div style={{ width: sliderProgress }} className={cl.progress} />
      <div style={{ right: sliderProgress }} className={cl.icon} />
    </div>
  );
};

export default StudentCardSlider;
