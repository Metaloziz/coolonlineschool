import classNames from 'classnames';
import { FC /*, useState*/ } from 'react';
import styles from './Slider.module.scss';

type SliderItem = {
  text: string;
  isActive: boolean;
};

type Props = {
  className?: string;
  sliderItems: [SliderItem, SliderItem];
};

const Slider: FC<Props> = ({ sliderItems: [first, second], className }) => {
  const FirstItemCLassName = classNames(styles.item, {
    [styles.active]: first.isActive,
  });
  const SecondItemCLassName = classNames(styles.item, {
    [styles.active]: second.isActive,
  });
  return (
    <div className={classNames(styles.container, className)}>
      <button className={FirstItemCLassName}>{first.text}</button>
      <button className={SecondItemCLassName}>{second.text}</button>
    </div>
  );
};

export default Slider;
