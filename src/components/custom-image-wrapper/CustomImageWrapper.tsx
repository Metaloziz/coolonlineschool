import classNames from 'classnames';
import Image from 'next/image';
import React, { DragEvent, FC } from 'react';
import cl from './CustomImageWrapper.module.scss';

interface Props {
  children: ReturnType<typeof Image>;
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
      className={classNames(cl.container, className, {
        [cl.withBorder]: isBordered,
      })}
      onDragStart={(e: DragEvent<HTMLDivElement>) => e.preventDefault()}
    >
      {children}
    </div>
  );
};

export default CustomImageWrapper;
