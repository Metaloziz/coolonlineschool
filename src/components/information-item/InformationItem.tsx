import { FC } from 'react';
import CustomSelect from '@components/custom-select/CustomSelect';
import TextField from '@components/text-fild/TextFild';
import styles from './InformationItem.module.scss';
import CustomCalendar from '../custom-calendar/CustomCalendar';

type VariantType = 'select' | 'input' | 'calendar';

type SizeType = 'large' | 'normal';

interface Option {
  value: string;
  label: string;
}

interface Props {
  title: string;
  variant: VariantType;
  option?: Option[];
  size?: SizeType;
  placeholder?: string;
}

const InformationItem: FC<Props> = ({
  title,
  variant,
  option = [],
  size = 'normal',
  placeholder = '',
}) => {
  const finalStyle = `${size === 'large' ? styles.large : styles.normal}`;
  return (
    <div className={styles.wrapBlockItem}>
      <div>
        <p>{title}</p>
      </div>
      <div className={finalStyle}>
        {variant === 'select' && (
          <CustomSelect options={option} placeholder={placeholder} />
        )}
        {variant === 'input' && <TextField />}
        {variant === 'calendar' && (
          <div className={styles.inputCalendar}>
            <input className={styles.input} type={'text'} />
            <CustomCalendar />
          </div>
        )}
      </div>
    </div>
  );
};

export default InformationItem;
