import { FirebaseApp, initializeApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore/lite'

export class FirebaseStore {
  public firebaseApp: FirebaseApp | undefined
  public firestore: Firestore | undefined

  constructor() {
    this.initFirebase()
  }

  private initFirebase() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDJuyqNFWCUpyejHcLm14IjnmL__Em2BPo',
      authDomain: 'rcozmp06.firebaseapp.com',
      projectId: 'rcozmp06',
      storageBucket: 'rcozmp06.appspot.com',
      messagingSenderId: '443979442608',
      appId: '1:443979442608:web:c40666b59cd2b436fb0e75',
      measurementId: 'G-S6QTV4JCZV',
    }

    this.firebaseApp = initializeApp(firebaseConfig)
    this.firestore = getFirestore(this.firebaseApp)
  }
}
