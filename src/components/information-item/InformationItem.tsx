import classNames from 'classnames';
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

  const renderCalendar = () => {
    return (
      <div className={styles.calendarStyle}>
        <div className={classNames(finalStyle, styles.inputCalendar)}>
          <TextField />
        </div>
        <CustomCalendar />
      </div>
    );
  };

  return (
    <div className={styles.wrapBlockItem}>
      <div>
        <p>{title}</p>
      </div>
      {variant === 'calendar' ? (
        renderCalendar()
      ) : (
        <div className={finalStyle}>
          {variant === 'select' && (
            <CustomSelect
              options={option}
              placeholder={placeholder}
              size={size}
            />
          )}
          {variant === 'input' && <TextField />}
        </div>
      )}
    </div>
  );
};

export default InformationItem;
