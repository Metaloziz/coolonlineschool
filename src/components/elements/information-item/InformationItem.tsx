import { FC, ChangeEvent, FocusEventHandler } from 'react';

import { CustomSelect, TextField } from '@components';
import cn from 'classnames';
import NumberFormat from 'react-number-format';
import CustomCalendar from 'src/components/elements/custom-calendar/CustomCalendar';
import styles from 'src/components/elements/information-item/InformationItem.module.scss';

type VariantType = 'select' | 'input' | 'calendar' | 'phone';

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
  value?: string;
  id?: string;
  type?: string;
  onChange?: (value: string) => void;
  onChangeEvent?: (value: ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const InformationItem: FC<Props> = props => {
  const {
    title,
    value,
    variant,
    option = [],
    size = 'normal',
    placeholder = '',
    className,
    id,
    type,
    onChange,
    onChangeEvent,
    inputClassName,
    onBlur,
  } = props;
  const finalStyle = `${size === 'large' ? styles.large : styles.normal}`;

  const renderCalendar = () => (
    <div className={styles.calendarStyle}>
      <div className={cn(finalStyle, styles.inputCalendar)}>
        <TextField />
      </div>
      <CustomCalendar />
    </div>
  );

  let part;

  switch (variant) {
    case 'calendar':
      renderCalendar();
      break;
    case 'select':
      part = <CustomSelect options={option} placeholder={placeholder} size={size} />;
      break;
    case 'phone':
      part = (
        <NumberFormat
          className={cn(className)}
          format="+7 (###) ###-####"
          mask="_"
          id={id}
          onChange={onChangeEvent}
          placeholder={placeholder}
          onBlur={onBlur}
        />
      );
      break;
    default:
      part = (
        <TextField
          onChange={e => onChange && onChange(e.target.value)}
          id={id}
          placeholder={placeholder}
          type={type}
          value={value || ''}
        />
      );
  }

  return (
    <div className={cn(styles.wrapBlockItem, className)}>
      <div>{title && <p>{title}</p>}</div>
      <div className={cn(styles.content, size === 'large' && styles.large, inputClassName)}>
        {part}
      </div>
      {/* {variant === 'calendar' ? ( */}
      {/*   renderCalendar() */}
      {/* ) : ( */}
      {/*   <div className={finalStyle}> */}
      {/*     {variant === 'select' && ( */}
      {/*       <CustomSelect options={option} placeholder={placeholder} size={size} /> */}
      {/*     )} */}
      {/*     {variant === 'input' && <TextField />} */}
      {/*   </div> */}
      {/* )} */}
    </div>
  );
};

export default InformationItem;
