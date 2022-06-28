import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonColorThemes } from '@app/enums';
import cl from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  colorTheme?: ButtonColorThemes;
  icon?: JSX.Element;
  children: string;
}

const Button: FC<IButton> = ({
  className,
  colorTheme = ButtonColorThemes.blue,
  icon,
  children,
  ...attrs
}) => {
  const btnClassNames = classNames(cl.container, cl[colorTheme], className);
  return (
    <button {...attrs} className={btnClassNames}>
      <b>{children}</b>
      {icon}
    </button>
  );
};

export default Button;
