import { FC } from 'react';

import cl from './CloseModalButton.module.scss';

type Props = {
  onClick: () => any;
};

const CloseModalButton: FC<Props> = ({ onClick }) => (
  <button type="button" className={cl.container} onClick={onClick} />
);

export default CloseModalButton;
