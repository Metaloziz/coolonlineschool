import { FC } from 'react';
import Select from 'react-select';
import styles from './CustomSelect.module.scss';

interface Props {
  options: {
    label: string;
    value: string;
  }[];
  placeholder: string;
}

const CustomSelect: FC<Props> = ({ options, placeholder }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Select
          instanceId={Symbol().toString()}
          placeholder={placeholder}
          options={options}
          components={{ IndicatorSeparator: () => null }}
        />
      </div>
    </div>
  );
};

export default CustomSelect;
