import React from 'react'
import { NavLink } from 'react-router-dom'
import { IMenu } from '../../stores/firebase.store'

export interface ISiteNavigation {
  items?: IMenu[]
}

export class SiteNavigation extends React.Component<ISiteNavigation> {
  render() {
    return (
      <nav>
        <ul>
          {this.props.items?.map(item => (
            <NavLink key={`${item.id}`} to={item.id}>
              {item.title}
            </NavLink>
          ))}
        </ul>
      </nav>
    )
  }
}
