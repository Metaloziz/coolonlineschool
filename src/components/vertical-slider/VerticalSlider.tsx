import classNames from 'classnames';
import { FC } from 'react';
import styles from './VerticalSlider.module.scss';

type Option = {
  text: string;
  id: number;
  isActive?: boolean;
};

type Props = { options: Option[]; className?: string };

const VerticalSlider: FC<Props> = ({ options, className }) => {
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
