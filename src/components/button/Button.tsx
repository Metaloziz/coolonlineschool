import classNames from 'classnames';
import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import { ButtonProps } from '@app/types/Props';
import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({
  className,
  colorTheme = ButtonColorThemes.blue,
  text,
  image,
  type = 'button',
}) => {
  const btnClassNames = classNames(
    styles.container,
    styles[colorTheme],
    className,
  );
  return type === 'submit' ? (
    <input type="submit" value={text} className={btnClassNames} />
  ) : (
    <button className={btnClassNames}>
      <b>{text}</b>
      {image}
    </button>
  );
};

export default Button;
