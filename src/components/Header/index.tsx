import React from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import { SiteNavigation } from '../SiteNavigation'
import { IStore } from '../../index'

const SiteHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 950px;
`

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export interface IHeaderProps extends IStore {}

@inject('store')
@observer
export class Header extends React.Component<IHeaderProps> {
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
        {this.props.store?.firebaseStore.siteMenu && (
          <SiteNavigation items={this.props.store?.firebaseStore.siteMenu} />
        )}
      </SiteHeader>
    )
  }
}
