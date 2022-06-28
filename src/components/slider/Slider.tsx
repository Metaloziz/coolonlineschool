import classNames from 'classnames';
import { FC, useState } from 'react';
import cl from './Slider.module.scss';

interface ISliderItem {
  text: string;
  isActive?: boolean;
  id: number;
}

interface ISlider {
  className?: string;
  options: ISliderItem[];
  colorTheme?: 'blue' | 'red';
  size?: 'long' | 'normal';
}

const Slider: FC<ISlider> = ({
  size = 'normal',
  colorTheme = 'blue',
  options,
  className,
}) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const containerClassNames = classNames(
    cl.container,
    className,
    cl[colorTheme],
    cl[size],
  );

  return (
    <div className={containerClassNames}>
      {options.map(({ text, isActive = false, id }) => {
        return (
          <button
            key={id}
            className={classNames(cl.option, {
              [cl.active]: activeId ? activeId === id : isActive,
            })}
            onClick={() => {
              setActiveId(id);
            }}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default Slider;
