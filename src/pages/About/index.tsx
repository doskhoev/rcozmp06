import { inject, observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { RootStore } from '../../stores/root.store'

export interface IAbout {}

@inject('store')
@observer
export class About extends React.Component<IAbout> {
  private get store() {
    return (this.props as { store: RootStore }).store
  }

  render() {
    return (
      <div>
        <h1>About: {this.store.test}</h1>
        <nav>
          <Link to="/">Main</Link> | <Link to="/about">About</Link>
        </nav>
      </div>
    )
  }
}
