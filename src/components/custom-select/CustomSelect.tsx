import { FC, SelectHTMLAttributes } from 'react';
import Select from 'react-select';
import cl from './CustomSelect.module.scss';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    label: string;
    value: string;
  }[];
  placeholder: string;
  size?: string;
}

const CustomSelect: FC<Props> = ({
  options,
  placeholder,
  size = 'sizeAuto',
}) => {
  return (
    <div className={cl.container}>
      <div className={cl.inner}>
        <Select
          instanceId={Symbol().toString()}
          placeholder={placeholder}
          options={options}
          components={{ IndicatorSeparator: () => null }}
          className={styles[size]}
        />
      </div>
    </div>
  );
};

export default CustomSelect;
