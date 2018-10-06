import {AnyAction, combineReducers} from 'redux'

import {IBookEntity} from '@src/models'
import * as actionTypes from './actionTypes'

export interface IBookState {
  error: null;
  list: IBookEntity[];
  loading: boolean;
}

function books(state: IBookState = {} as IBookState, action: AnyAction): IBookState {
  switch (action.type) {
    case actionTypes.BOOKS_LOADING:
      return {
        error: null,
        list: [],
        loading: true,
      }
    case actionTypes.BOOKS_LOAD_SUCCESS:
      return {
        error: null,
        list: action.payload,
        loading: false,
      }
    case actionTypes.BOOKS_LOAD_ERROR:
      return {
        error: action.error,
        list: [],
        loading: false,
      }
    default:
      return state
  }
}

export interface IState {
  books: IBookState;
}
// typescript中不支持export const xxx = yyy的写法
export default {
  books,
}
