import React from 'react'
import './App.css'
import { inject, observer } from 'mobx-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Main } from './pages/Main'
import { Page } from './pages/Page'
import styled from 'styled-components'
import { IStore } from './index'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export interface IAppProps extends IStore {}

@inject('store')
@observer
export class App extends React.Component<IAppProps> {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/">
              <Route index element={<Main />} />
              {this.props.store?.firebaseStore.allMenuItems.map(menuItem => (
                <Route
                  key={menuItem.id}
                  path={menuItem.id}
                  element={<Page pageId={menuItem.id} />}
                />
              ))}
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    )
  }
}
