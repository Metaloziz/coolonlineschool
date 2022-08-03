import { ReactElement } from 'react';

import { appStore } from '@app/store';
import { Nullable } from '@app/types';
import { AlertSnackbar } from '@components/elements/AlertSnackbars/AlertSnackbar';
import { observer } from 'mobx-react-lite';

export const AlertSnackbars = observer((): Nullable<ReactElement> => {
  const { setSuccessMessage, successMessage, errorMessage, setErrorMessage } = appStore;

  if (errorMessage !== null) {
    return <AlertSnackbar type="error" onClose={setErrorMessage} message={errorMessage} />;
  }

  if (successMessage !== null) {
    return <AlertSnackbar type="success" onClose={setSuccessMessage} message={successMessage} />;
  }
  return null;
});
