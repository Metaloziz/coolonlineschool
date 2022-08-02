import { FC } from 'react';

import CustomSelect from '@components/custom-select/CustomSelect';
import TextField from '@components/text-fild/TextFild';
import classNames from 'classnames';

import CustomCalendar from '../custom-calendar/CustomCalendar';

import styles from './InformationItem.module.scss';

type VariantType = 'select' | 'input' | 'calendar';

type SizeType = 'large' | 'normal';

interface Option {
  value: string;
  label: string;
}

interface Props {
  title?: string;
  variant: VariantType;
  option?: Option[];
  size?: SizeType;
  placeholder?: string;
  className?: string;
}

const InformationItem: FC<Props> = ({
  title,
  variant,
  option = [],
  size = 'normal',
  placeholder = '',
  className,
}) => {
  const finalStyle = `${size === 'large' ? styles.large : styles.normal}`;

  const renderCalendar = () => (
    <div className={styles.calendarStyle}>
      <div className={classNames(finalStyle, styles.inputCalendar)}>
        <TextField placeholder={placeholder} />
      </div>
      <CustomCalendar />
    </div>
  );

  return (
    <div className={classNames(styles.wrapBlockItem, className)}>
      <div>
        <p>{title}</p>
      </div>
      {variant === 'calendar' ? (
        renderCalendar()
      ) : (
        <div className={finalStyle}>
          {variant === 'select' && (
            <CustomSelect options={option} placeholder={placeholder} size={size} />
          )}
          {variant === 'input' && <TextField placeholder={placeholder} />}
        </div>
      )}
    </div>
  );
};

export default InformationItem;
