import { Roles } from '@app/store';
import usersStore from '@app/store/usersStore';
import { PayloadUserType } from '@app/types/PayloadUserType';
import { CurrentUserType } from '@app/types/UserTypes';
import { setErrorFormMessage } from '@components/elements/search-users/addEditUserForm/utils/setErrorFormMessage';
import { removeKeysWithSameValues } from '@utils/removeKeysWithSameValues';

export const action = async (
  user: CurrentUserType | undefined,
  newUserData: PayloadUserType,
  setError: any,
  role: Roles,
  onCloseModal: () => void,
  reset: () => void,
  // setStudentId: Dispatch<SetStateAction<string>>,
  // setIsParentShown: Dispatch<SetStateAction<boolean>>,
  // roleCode: string,
  // franchise: string,
  // tariff: string,
  // groupId: string,
) => {
  const { createUser, editUser, getUsers } = usersStore;

  let response;

  if (user) {
    const memoData = removeKeysWithSameValues(newUserData, user);
    response = await editUser(memoData, user.id); // todo edit user
    if (typeof response === 'string') {
      setErrorFormMessage(response, setError);
      return;
    }
    getUsers();
  } else {
    response = await createUser(newUserData);

    if (typeof response === 'string') {
      setErrorFormMessage(response, setError);
      return;
    }
  }

  onCloseModal();
  reset();
};
