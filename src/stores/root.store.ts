// import { observable, action, computed } from 'mobx'
// import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import { observable } from 'mobx'

export class RootStore {
  @observable
  public test: string = 'Hello!'

  constructor() {
    this.initFirebase()
  }

  private initFirebase() {
    // const firebaseConfig = {
    //   apiKey: 'AIzaSyCIhs2cBl6cFUSlqMjH9fnrgo_Cv0YDAlI',
    //   authDomain: 'oban-modz-86c7e.firebaseapp.com',
    //   projectId: 'oban-modz-86c7e',
    //   storageBucket: 'oban-modz-86c7e.appspot.com',
    //   messagingSenderId: '69985453611',
    //   appId: '1:69985453611:web:c501280de9429aaa3bcc6e',
    // }
    // firebase.initializeApp(firebaseConfig)
    // const db = firebase.firestore().collection('products')
    // db.get().then(query => {
    //   console.log(query)
    // })
  }
}
