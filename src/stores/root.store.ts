import { observable } from 'mobx'
import { FirebaseStore } from './firebase.store'

export class RootStore {
  firebaseStore: FirebaseStore

  @observable
  public test: string = 'Hello!' // TODO: remove me

  constructor() {
    this.firebaseStore = new FirebaseStore()
  }
}
