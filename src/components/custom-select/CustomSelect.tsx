import { FC } from 'react';

import classNames from 'classnames';
import Select from 'react-select';

import cl from './CustomSelect.module.scss';

interface ICustomSelect {
  options: {
    label: string;
    value: string;
  }[];
  placeholder: string;
  size?: 'auto' | 'normal' | 'xnormal' | 'large';
  className?: string;
}

const CustomSelect: FC<ICustomSelect> = ({ options, placeholder, size = 'auto', className }) => (
  <div className={classNames(cl.container, className)}>
    <Select
      placeholder={placeholder}
      options={options}
      components={{ IndicatorSeparator: () => null }}
      className={cl[size]}
      menuPosition="fixed"
      instanceId={`${options[0] && options[0].label}`}
    />
  </div>
);

export default CustomSelect;
