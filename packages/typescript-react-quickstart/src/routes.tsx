import * as React from 'react'
import { Route, Switch } from 'react-router'

import Home from './pages/Home'

const routes = (
  <Switch>
    <Route exact={true} path="/" component={Home} />
  </Switch>
)

export default routes
