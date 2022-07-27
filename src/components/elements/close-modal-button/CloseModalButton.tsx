import { FC } from 'react';

import cl from 'src/components/elements/close-modal-button/CloseModalButton.module.scss';

type Props = {
  onClick: () => any;
};

const CloseModalButton: FC<Props> = ({ onClick }) => (
  <button type="button" className={cl.container} onClick={onClick} />
);

export default CloseModalButton;
