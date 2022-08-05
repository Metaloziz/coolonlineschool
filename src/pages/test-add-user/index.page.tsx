import { useState } from 'react';

import { users } from '@app/store/usersStore';
import ModalAddUser from '@components/elements/modals/modal-add-user/ModalAddUser';

const Test = () => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };
  return (
    <div>
      <div style={{ width: '300px' }}>{JSON.stringify(users.users)}</div>
      <ModalAddUser setOpen={setOpen} open={open} closeMode={close} />
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        on
      </button>
    </div>
  );
};

export default Test;
