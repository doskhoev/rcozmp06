import React from 'react'
import { NavLink } from 'react-router-dom'

interface IMenuItem {
  id: string
  title: string
  routeTo: string
  items?: IMenuItem[]
}

export interface ISiteNavigation {
  items: IMenuItem[]
}

export class SiteNavigation extends React.Component<ISiteNavigation> {
  render() {
    return (
      <nav>
        <ul>
          {this.props.items.map(item => (
            <NavLink key={`${item.id}`} to={item.routeTo}>
              {item.title}
            </NavLink>
          ))}
        </ul>
      </nav>
    )
  }
}
