import classNames from 'classnames';
import { FC } from 'react';
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
  return (
    <div
      className={classNames(cl.container, className, cl[colorTheme], cl[size])}
    >
      {options.map(({ text, isActive = false, id }) => {
        return (
          <button
            key={id}
            className={classNames(cl.option, { [cl.active]: isActive })}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default Slider;
