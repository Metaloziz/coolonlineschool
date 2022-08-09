import { FC, ChangeEvent, FocusEventHandler } from 'react';

import { CustomSelect, TextField } from '@components';
import cn from 'classnames';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import CustomCalendar from 'src/components/elements/custom-calendar/CustomCalendar';
import styles from 'src/components/elements/information-item/InformationItem.module.scss';

type VariantType = 'select' | 'input' | 'calendar' | 'phone' | 'pin';

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
  defaultValue?: string;
  id?: string;
  type?: string;
  onChange?: (value: string) => void;
  onChangeNumber?: (value: number) => void;
  onChangeEvent?: (value: ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  displayType?: 'input' | 'text';
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
    onChangeNumber,
    inputClassName,
    onBlur,
    defaultValue,
    displayType = 'input',
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

  const handlerChangeEvent = (values: NumberFormatValues) => {
    onChangeNumber && values.floatValue && onChangeNumber(values.floatValue);

    onChange && onChange(`7${values.value}`);
  };

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
          onValueChange={handlerChangeEvent}
          className={cn(className)}
          format="+7 (###) ### ## ##"
          mask="_"
          id={id}
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
          displayType={displayType}
          defaultValue={defaultValue}
          allowEmptyFormatting
        />
      );
      break;
    case 'pin':
      part = (
        <NumberFormat
          onValueChange={handlerChangeEvent}
          className={cn(className)}
          format="# # # #"
          mask="_"
          id={id}
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
          displayType={displayType}
          defaultValue={defaultValue}
          allowEmptyFormatting
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
    </div>
  );
};

export default InformationItem;
