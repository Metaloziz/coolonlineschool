import { makeAutoObservable } from 'mobx';

export class ApplicationStore {
  constructor() {
    makeAutoObservable(this);
  }
}
