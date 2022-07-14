import { ButtonHTMLAttributes, FC } from 'react';

import { ISvg } from '@app/types';
import { IconSvg } from '@components/svg';

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconAttrs: ISvg;
}

const IconButton: FC<IIconButton> = ({ iconAttrs, ...attrs }) => (
  <button type="button" {...attrs}>
    <IconSvg {...iconAttrs} />
  </button>
);

export default IconButton;
