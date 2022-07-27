import { FC } from 'react';

import classNames from 'classnames';
import cl from 'src/components/elements/vertical-slider/VerticalSlider.module.scss';

interface IVerticalSliderOptions {
  text: string;
  id: number;
  isActive?: boolean;
}

interface IVerticalSliders {
  options: IVerticalSliderOptions[];
  className?: string;
}

const VerticalSlider: FC<IVerticalSliders> = ({ options, className }) => (
  <div className={classNames(cl.container, className)}>
    {options.map(({ text, id, isActive = false }) => (
      <div key={id} className={classNames(cl.option, { [cl.active]: isActive })}>
        {text}
      </div>
    ))}
  </div>
);

export default VerticalSlider;
