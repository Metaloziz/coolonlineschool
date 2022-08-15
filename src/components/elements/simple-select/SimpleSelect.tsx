import { FC, useState } from 'react';

import { AddUserType } from '@components/elements/modals/modal-add-user/form-user/FormAddUser';
import cn from 'classnames';
import { UseFormRegister } from 'react-hook-form';
import Select, { ActionMeta, SingleValue } from 'react-select';
import styles from 'src/components/elements/simple-select/SimpleSelect.module.scss';

export type Option = { label: string; value: string | undefined };

interface Props {
  options: Option[];
  placeholder?: string;
  onChange?: (option: Option) => void;
  className?: string;
  title?: string;
  error?: string;
  value?: Option;
  register?: UseFormRegister<AddUserType>;
}

const SimpleSelect: FC<Props> = props => {
  const [currencyValue, setCurrencyValue] = useState<string | undefined>('');
  const { options, placeholder, className, onChange, title, value, error, register } = props;
  // const id = new ();
  // const instanceId = useId();
  const handleChange = (v: SingleValue<Option> | null, actionMeta: ActionMeta<Option>) => {
    v && onChange && onChange(v);
    setCurrencyValue(v?.value);
  };
  return (
    <div className={cn(styles.selectWrap, className)}>
      {title && (
        <div
          className={title === 'Роль:' || title === 'Группа:' ? styles.labelAfter : styles.label}
        >
          {title}
        </div>
      )}
      <div
        className={
          title === 'Роль:' || title === 'Группа:'
            ? styles.selectWrapBoxAfter
            : styles.selectWrapBox
        }
      >
        <Select
          className={styles.select}
          placeholder={placeholder}
          options={options}
          onChange={handleChange}
          components={{ IndicatorSeparator: () => null }}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default SimpleSelect;
