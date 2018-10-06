import {combineReducers} from 'redux'
import {IState as HomeState, reducer as HomeReducer} from './pages/Home'

export interface IRootState {
  home: HomeState;
}

export default {
  home: combineReducers({...HomeReducer}),
}
