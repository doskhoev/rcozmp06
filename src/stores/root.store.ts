import { FirebaseStore } from './firebase.store'

export class RootStore {
  public firebaseStore: FirebaseStore

  constructor() {
    this.firebaseStore = new FirebaseStore()
  }
}
