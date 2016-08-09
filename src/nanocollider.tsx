import * as React from 'react'
import {render} from 'react-dom'
import {createStore, Action} from 'redux'
import {Provider} from 'react-redux'

import App from './components/App/App'

const root = document.getElementById('root')

interface AppState {
  paused: boolean
}

const store = createStore<AppState>((state, action: Action) => {
  return state
})

render(<Provider store={store}>
  <App />
</Provider>, root)
