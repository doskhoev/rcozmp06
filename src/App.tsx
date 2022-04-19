import React from 'react'
import './App.css'
import { observer } from 'mobx-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Main } from './pages/Main'
import { About } from './pages/About'
import styled from 'styled-components'
// import { makeObservable } from 'mobx'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export interface IAppProps {}

@observer
export class App extends React.Component<IAppProps> {
  // constructor(props: IAppProps) {
  //   super(props)
  //   makeObservable(this)
  // }

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/">
              <Route index element={<Main />} />
              <Route path={'about'} element={<About />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    )
  }
}
