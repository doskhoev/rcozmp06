import { DocumentData } from 'firebase/firestore'
import { action, makeObservable, observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import React from 'react'
import { IStore } from '../../index'

export interface IPage extends IStore {
  pageId: string
}

@inject('store')
@observer
export class Page extends React.Component<IPage> {
  @observable
  private pageData: DocumentData = {}

  constructor(props: IPage) {
    super(props)
    makeObservable(this)

    this.getPage()
  }

  componentDidUpdate() {
    this.getPage()
  }

  @action
  private setPageData = (data: DocumentData) => {
    this.pageData = data
  }

  private getPage() {
    this.props.store?.firebaseStore
      .getPage(this.props.pageId)
      .then(data => {
        this.setPageData(data)
      })
      .catch(() => {
        this.setPageData({})
      })
  }

  render() {
    return (
      <div>
        <h1>{this.pageData.title || 'No page'}</h1>
        <p>{this.pageData.content}</p>
      </div>
    )
  }
}
