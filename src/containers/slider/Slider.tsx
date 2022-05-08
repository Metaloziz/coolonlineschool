import classNames from 'classnames';
import { FC } from 'react';
import { SliderProps } from '@app/types/Props';
import styles from './Slider.module.scss';

const Slider: FC<SliderProps> = ({
  size = 'normal',
  colorTheme = 'blue',
  options,
  className,
}) => {
  return (
    <div
      className={classNames(
        styles.container,
        className,
        styles[colorTheme],
        styles[size],
      )}
    >
      {options.map(({ text, isActive = false, id }) => {
        return (
          <button
            key={id}
            className={classNames(styles.option, { [styles.active]: isActive })}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default Slider;
