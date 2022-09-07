import { ReactNode } from 'react';

import { Nullable } from '@app/types';
import { makeObservable, observable } from 'mobx';

export class StoreBase {
  isLoading: boolean = false;

  error: Nullable<Error> = null;

  success: Nullable<ReactNode> = null;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      error: observable,
      success: observable,
    });
  }

  execute = async <T>(action: () => Promise<T>) => {
    try {
      this.isLoading = true;
      await action();
    } catch (error) {
      // console.log(errorAxios);
    } finally {
      this.isLoading = false;
    }
  };
}
