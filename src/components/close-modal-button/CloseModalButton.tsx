import { FC } from 'react';
import cl from './CloseModalButton.module.scss';

type Props = {
  onClick: () => any;
};

const CloseModalButton: FC<Props> = ({ onClick }) => {
  return <button className={cl.container} onClick={onClick}></button>;
};

export default CloseModalButton;
