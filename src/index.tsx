import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Provider } from 'mobx-react'
import { RootStore } from './stores/root.store'

export interface IStore {
  store?: RootStore
}

const rootStore = new RootStore()

const element = document.getElementById('root')
const root = ReactDOM.createRoot(element as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
