import classNames from 'classnames';
import { FC /*, useState*/ } from 'react';
import styles from './Slider.module.scss';

type SliderItem = {
  text: string;
  isActive?: boolean;
  id: number;
};

type Props = {
  className?: string;
  options: SliderItem[];
  colorTheme?: 'blue' | 'red';
  size?: 'long' | 'normal';
};

const Slider: FC<Props> = ({
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
