import classNames from 'classnames';
import { FC } from 'react';
import { ButtonProps } from '@app/types/ComponentsProps';
import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({ colorTheme = 'blue', text }) => {
  return (
    <button className={classNames(styles.container, styles[colorTheme])}>
      {text}
    </button>
  );
};

export default Button;
