import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import classNames from 'classnames';
import styles from 'src/components/elements/text-fild/TextFild.module.scss';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: string;
  id?: string;
  className?: string;
  placeholder?: string;
}

const TextField: FC<Props> = ({ type, id, className, ...props }) => (
  <div className={classNames(styles.textField, className)}>
    <input type={type} id={id} {...props} />
  </div>
);

export default TextField;
