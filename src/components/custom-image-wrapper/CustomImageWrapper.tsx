import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './CustomImageWrapper.module.scss';

interface Props {
  children: React.ReactNode;
  isBordered?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

const CustomImageWrapper: FC<Props> = ({
  className,
  children,
  isBordered = true,
  height,
  width,
}) => {
  return (
    <div
      style={{ width, height }}
      className={classNames(className, { [styles.bordered]: isBordered })}
    >
      {children}
    </div>
  );
};

export default CustomImageWrapper;
