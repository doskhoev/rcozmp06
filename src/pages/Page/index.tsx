import { inject, observer } from 'mobx-react'
import React from 'react'
import { IStore } from '../../index'

export interface IPage extends IStore {
  pageId: string
}

@inject('store')
@observer
export class Page extends React.Component<IPage> {
  constructor(props: IPage) {
    super(props)
    console.log('Page: constructor:', this.props.pageId)
    this.getPage()
  }

  componentDidUpdate() {
    console.log('Page: component did update:', this.props.pageId)
    this.getPage()
  }

  private getPage() {
    this.props.store?.firebaseStore
      .getPage(this.props.pageId)
      .then(data => {
        console.log(data)
      })
      .catch(() => {
        console.log('Нет такой страницы:', this.props.pageId)
      })
  }

  render() {
    return (
      <div>
        <h1>{this.props.pageId}</h1>
      </div>
    )
  }
}
