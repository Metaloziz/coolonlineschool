import classNames from 'classnames';
import { FC } from 'react';
import { VerticalSliderProps } from '@app/types/Props';
import styles from './VerticalSlider.module.scss';

const VerticalSlider: FC<VerticalSliderProps> = ({ options, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      {options.map(({ text, id, isActive = false }) => (
        <div
          key={id}
          className={classNames(styles.option, { [styles.active]: isActive })}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default VerticalSlider;
