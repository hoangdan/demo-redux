import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import Home from './containers/Home'
import reducer from './reducers/reducer'


const store = createStore(reducer, compose(
  window.devToolsExtension?window.devToolsExtension(): f => f
))

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)
