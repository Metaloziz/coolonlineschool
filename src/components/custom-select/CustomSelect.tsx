import classNames from 'classnames';
import { FC } from 'react';
import Select from 'react-select';
import cl from './CustomSelect.module.scss';

interface ICustomSelect {
  options: {
    label: string;
    value: string;
  }[];
  placeholder: string;
  size?: 'auto' | 'normal' | 'large';
  className?: string;
}

const CustomSelect: FC<ICustomSelect> = ({
  options,
  placeholder,
  size = 'auto',
  className,
}) => {
  return (
    <div className={classNames(cl.container, className)}>
      <Select
        placeholder={placeholder}
        options={options}
        components={{ IndicatorSeparator: () => null }}
        className={cl[size]}
      />
    </div>
  );
};

export default CustomSelect;
