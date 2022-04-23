import { inject, observer } from 'mobx-react'
import React from 'react'
import { IStore } from '../../index'

export interface IMain extends IStore {}

@inject('store')
@observer
export class Main extends React.Component<IMain> {
  render() {
    return (
      <div>
        <h1>Main</h1>
        <pre>TODO</pre>
      </div>
    )
  }
}
