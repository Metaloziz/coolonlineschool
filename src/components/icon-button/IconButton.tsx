import { ButtonHTMLAttributes, FC } from 'react';
import { ISvg } from '@app/types';
import { IconSvg } from '@components/svg';
import cl from './IconButton.module.scss';

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconAttrs: ISvg;
}

const IconButton: FC<IIconButton> = ({ iconAttrs, ...attrs }) => {
  return (
    <button {...attrs} className={cl.container}>
      <IconSvg {...iconAttrs} />
    </button>
  );
};

export default IconButton;
