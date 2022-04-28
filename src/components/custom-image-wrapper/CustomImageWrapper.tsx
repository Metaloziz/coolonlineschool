import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './CustomImageWrapper.module.scss';

interface Props {
  children: React.ReactNode;
  isBordered?: boolean;
  className?: string;
}

const CustomImageWrapper: FC<Props> = ({
  className,
  children,
  isBordered = true,
}) => {
  return (
    <div
      className={classNames(styles.container, className, {
        [styles.withBorder]: isBordered,
      })}
    >
      {children}
    </div>
  );
};

export default CustomImageWrapper;
