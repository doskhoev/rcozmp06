import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const SiteHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export interface IHeaderProps {}

@inject('store')
@observer
export class Header extends React.Component<IHeaderProps> {
  private menu = [
    { id: 'main', title: 'Главная', routeTo: '/' },
    { id: 'about', title: 'О нас', routeTo: '/about' },
    { id: 'contacts', title: 'Контакты', routeTo: '/contacts' },
  ]

  render() {
    return (
      <SiteHeader>
        <LogoContainer>
          <Link to="/">
            <img src={'/img/logo1.png'} alt="Logo" />
          </Link>
          <Link to="/about">
            <img src={'/img/logo2.png'} alt="Logo" />
          </Link>
        </LogoContainer>
        <nav>
          <ul>
            {this.menu.map(item => (
              <NavLink key={`${item.id}`} to={item.routeTo}>
                {item.title}
              </NavLink>
            ))}
          </ul>
        </nav>
      </SiteHeader>
    )
  }
}
