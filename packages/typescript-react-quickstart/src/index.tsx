import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import { ConfigureStore, history } from './configureStore'

import routes from './routes'

const store = ConfigureStore()
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
, document.getElementById('root'))
