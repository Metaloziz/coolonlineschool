import { FC } from 'react';
import Select from 'react-select';
import styles from './CustomSelect.module.scss';

interface Props {
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
    <div className={styles.container}>
      <div className={styles.inner}>
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
