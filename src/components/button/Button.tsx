import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  colorTheme?: ButtonColorThemes;
}

const Button: FC<Props> = ({ colorTheme = ButtonColorThemes.blue, text }) => {
  return (
    <button className={classNames(styles.container, styles[colorTheme])}>
      {text}
    </button>
  );
};

export default Button;
