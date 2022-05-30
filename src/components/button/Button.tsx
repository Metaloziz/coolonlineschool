import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import cl from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button';
  className?: string;
  text: string;
  colorTheme?: ButtonColorThemes;
  image?: JSX.Element;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButton> = ({
  className,
  colorTheme = ButtonColorThemes.blue,
  text,
  image,
  type = 'button',
  onClick,
}) => {
  const btnClassNames = classNames(cl.container, cl[colorTheme], className);
  return type === 'submit' ? (
    <input type="submit" value={text} className={btnClassNames} />
  ) : (
    <button onClick={onClick} className={btnClassNames}>
      <b>{text}</b>
      {image}
    </button>
  );
};

export default Button;
