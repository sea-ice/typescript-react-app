import {IBookEntity} from '@src/models'
import * as actionTypes from './actionTypes'

export function loadBooks() {
  return {
    type: actionTypes.BOOKS_LOADING,
  }
}

export function getBookList(payload: IBookEntity[]) {
  return {
    payload,
    type: actionTypes.BOOKS_LOAD_SUCCESS,
  }
}

export function loadBooksError(error: any) {
  return {
    error,
    type: actionTypes.BOOKS_LOAD_SUCCESS,
  }
}
// 使用export {a, b} from 'path'，当前文件中无法访问到a，b这两个变量
