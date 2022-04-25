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
    <div className={styles.selectWrap}>
      <Select
        instanceId={Symbol().toString()}
        placeholder={placeholder}
        options={options}
        components={{ IndicatorSeparator: () => null }}
      />
    </div>
  );
};

export default CustomSelect;
