import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  getDocs,
  collection,
  Firestore,
  doc,
  getDoc,
  DocumentData,
} from 'firebase/firestore'
import { action, makeObservable, observable } from 'mobx'

export interface IMenu {
  id: string
  order: number
  title: string
  items?: IMenu[]
  parentName?: string
  pages?: string[]
}

export interface IPage {
  title: string
  // TODO
}

export class FirebaseStore {
  private db: Firestore | undefined

  @observable
  public siteMenu: IMenu[] = []

  @observable
  public allMenuItems: IMenu[] = []

  constructor() {
    makeObservable(this)
    this.initFirebase()
  }

  @action
  private changeSiteMenu = (menu: IMenu[]) => {
    this.siteMenu = menu
  }

  @action
  private changeAllMenuItems = (menu: IMenu[]) => {
    this.allMenuItems = menu
  }

  public getPage(pageId: string): Promise<DocumentData> {
    if (!this.db) {
      return Promise.reject()
    }

    return getDoc(doc(this.db, 'pages', pageId)).then(res => {
      if (res.exists()) {
        return res.data()
      } else {
        return Promise.reject()
      }
    })
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

    const firebaseApp = initializeApp(firebaseConfig)
    const db = getFirestore(firebaseApp)
    this.db = db
    this.getMenuItems(db)
  }

  private getMenuItems(db: Firestore) {
    getDocs(collection(db, 'menu')).then(items => {
      const rawMenu: IMenu[] = []
      items.forEach(item => {
        const data = item.data()
        const menuItem = {
          id: item.id,
          order: data.order,
          title: data.title,
          parentName: data.parentName,
        }
        rawMenu.push(menuItem)
      })

      this.changeAllMenuItems(rawMenu)

      rawMenu
        .sort((a, b) => a.order - b.order)
        .forEach(item => {
          if (item.parentName) {
            const findedItem = rawMenu.find(_ => _.id === item.parentName)
            if (findedItem) {
              findedItem.items = [...(findedItem.items || []), item]
            }
          }
        })

      this.changeSiteMenu(rawMenu.filter(item => !item.parentName))
    })
  }
}
