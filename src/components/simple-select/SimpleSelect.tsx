import {FC} from 'react';

import cn from 'classnames';
import Select, {ActionMeta, SingleValue} from 'react-select';

import styles from './SimpleSelect.module.scss';

export type Option = { label: string; value: string | undefined };

interface Props {
  options: Option[];
  placeholder?: string;
  onChange?: (option: Option) => void;
  className?: string;
  title?: string;
  error?: string;
  value?: Option;
}

const SimpleSelect: FC<Props> = props => {
  const {options, placeholder, className, onChange, title, value, error} = props;
  // const id = new ();
  // const instanceId = useId();
  const handleChange = (v: SingleValue<Option> | null, actionMeta: ActionMeta<Option>) => {
    v && onChange && onChange(v);
  };
  return (
    <div className={cn(styles.selectWrap, className)}>
      {title && <div className={ (title === "Роль:" || title === "Группа:") ? styles.labelAfter : styles.label}>{title}</div>}
      <div className={(title === "Роль:" || title === "Группа:") ? styles.selectWrap__boxAfter : styles.selectWrap__box}>
        <Select
          // id={id}
          // instanceId={instanceId}

          placeholder={"dsd"}
          options={options}
          onChange={handleChange}
          value={value}
          components={{IndicatorSeparator: () => null}}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>

  );
};

export default SimpleSelect;
