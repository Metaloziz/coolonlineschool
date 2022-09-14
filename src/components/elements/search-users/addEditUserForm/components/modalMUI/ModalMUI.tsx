import React, { FC } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export const ModalMUI: FC<Props> = ({ open, onClose, children }) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={style}>
      <div>{children}</div>
    </Box>
  </Modal>
);
