import { DetailedHTMLProps, FC, InputHTMLAttributes, forwardRef, Ref } from 'react';

import classNames from 'classnames';
import styles from 'src/components/elements/text-fild/TextFild.module.scss';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: string;
  id?: string;
  className?: string;
  placeholder?: string;
  ref?: Ref<any>;
}

const TextField: FC<Props> = forwardRef(({ type, id, className, placeholder, ...props }, ref) => (
  <div className={classNames(styles.textField, className)}>
    <input type={type} id={id} {...props} placeholder={placeholder} ref={ref} />
  </div>
));

export default TextField;
