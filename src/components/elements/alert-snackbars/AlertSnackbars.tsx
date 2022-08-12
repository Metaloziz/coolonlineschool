import { ReactElement } from 'react';

import { appStore } from '@app/store';
import { Nullable } from '@app/types';
import { observer } from 'mobx-react-lite';

import { AlertSnackbar } from './AlertSnackbar';

const AlertSnackbars = observer((): Nullable<ReactElement> => {
  const { setSuccessMessage, successMessage, errorMessage, setErrorMessage } = appStore;

  if (errorMessage !== null) {
    return <AlertSnackbar type="error" onClose={setErrorMessage} message={errorMessage} />;
  }

  if (successMessage !== null) {
    return <AlertSnackbar type="success" onClose={setSuccessMessage} message={successMessage} />;
  }

  return null;
});

export default AlertSnackbars;
