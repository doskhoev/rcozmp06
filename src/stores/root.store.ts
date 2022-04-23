import { FirebaseStore } from './firebase.store'

export class RootStore {
  firebaseStore: FirebaseStore

  constructor() {
    this.firebaseStore = new FirebaseStore()
  }
}
