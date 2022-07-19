import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import styles from './TextCustomField.module.scss';

type Props = {
  width?: string;
  value: string;
  label?: string;
  error?: string;
  ln?: number
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextCustomField = (props: Props) => {
  const { type,width, onChange, value, error,ln, label, ...rest } = props;
  return (
    <div className={styles.textField}>
      {label && <div className={ln === 1 ? styles.labelParent : styles.label}>{label}</div>}
      <div style = {{width: width,}}>
        <input {...rest} onChange={onChange} value={value} type={type || 'text'}/>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default TextCustomField;
