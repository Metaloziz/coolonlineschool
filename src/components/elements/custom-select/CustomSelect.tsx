import { FC, FocusEventHandler } from 'react';

import classNames from 'classnames';
import Select, { ActionMeta, SingleValue } from 'react-select';
import cl from 'src/components/elements/custom-select/CustomSelect.module.scss';

interface ICustomSelect {
  options: {
    label: string;
    value: string;
  }[];
  placeholder: string;
  size?: 'auto' | 'normal' | 'xnormal' | 'large';
  className?: string;
  onChange?: (value: string) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const CustomSelect: FC<ICustomSelect> = ({
  options,
  placeholder,
  size = 'auto',
  onChange,
  className,
  onBlur,
}) => {
  const handlerChange = (newValue: SingleValue<{ label: string; value: string }>) => {
    onChange && newValue && onChange(newValue.value);
  };
  return (
    <div className={classNames(cl.container, className)}>
      <Select
        onChange={handlerChange}
        placeholder={placeholder}
        options={options}
        components={{ IndicatorSeparator: () => null }}
        className={cl[size]}
        menuPosition="fixed"
        onBlur={onBlur}
        instanceId={`${options[0] && options[0].label}`}
      />
    </div>
  );
};
export default CustomSelect;
