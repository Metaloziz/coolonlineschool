import classNames from 'classnames';
import { ReactNode, FC } from 'react';
import cl from './PageContainer.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
}

const PageContainer: FC<Props> = ({ children, className }) => (
  <div className={classNames(cl.main, className)}>{children}</div>
);

export default PageContainer;
