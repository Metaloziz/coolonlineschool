import { FC, useState } from 'react';

import classNames from 'classnames';
import cl from 'src/components/elements/slider/Slider.module.scss';

interface ISliderItem {
  text: string;
  onClick?: (n: number) => void;
  id: number;
}

interface ISlider {
  className?: string;
  options: ISliderItem[];
  colorTheme?: 'blue' | 'red';
  size?: 'long' | 'normal';
}

const Slider: FC<ISlider> = ({ size = 'normal', colorTheme = 'blue', options, className }) => {
  const [activeId, setActiveId] = useState<number>(1);

  const containerClassNames = classNames(cl.container, className, cl[colorTheme], cl[size]);

  return (
    <div className={containerClassNames}>
      {options.map(({ text, onClick, id }) => (
        <button
          type="button"
          key={id}
          className={classNames(cl.option, {
            [cl.active]: activeId ? activeId === id : false,
          })}
          onClick={() => {
            onClick && onClick(id);
            setActiveId(id);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default Slider;
