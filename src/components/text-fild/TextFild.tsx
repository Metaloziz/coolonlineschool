import { FC } from 'react';

import classNames from 'classnames';

import styles from './TextFild.module.scss';

interface Props {
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
