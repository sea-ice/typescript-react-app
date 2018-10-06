import { createHashHistory } from 'history'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
// import { routerMiddleware, routerReducer } from 'react-router-redux'

import rootReducer from './reducer'
import rootSaga from './saga'

const history = createHashHistory()
const ConfigureStore = (initialState = {}) => {
  // let router = routerMiddleware(history)
  // let middlewares = [createLogger(), router]

  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [createLogger(), sagaMiddleware]

  const store = createStore(combineReducers({
    ...rootReducer,
    // router: routerReducer
  }), initialState, applyMiddleware(...middlewares))

  // run the saga
  sagaMiddleware.run(rootSaga)

  return store
}

export {
  ConfigureStore,
  history,
}
