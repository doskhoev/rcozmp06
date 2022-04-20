import { inject, observer } from 'mobx-react'
import React from 'react'
import { IStore } from '../../index'

export interface IAbout extends IStore {}

@inject('store')
@observer
export class About extends React.Component<IAbout> {
  render() {
    return (
      <div>
        <h1>About: {this.props.store?.test}</h1>
      </div>
    )
  }
}
