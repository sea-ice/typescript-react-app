import {call, fork, put} from 'redux-saga/effects'

import {fetchBooks} from '@src/api/books'
import * as Actions from './actions'

function* getBookList() {
  try {
    const books = yield call(fetchBooks)
    yield put(Actions.getBookList(books))
  } catch (e) {
    // console.log(e)
    yield put(Actions.loadBooksError(e))
  }
}

// fork函数可以接收普通的函数，也可以接收生成器函数
function* homeSaga() {
  yield fork(getBookList) // 启动时自动拉取图书列表
}

export default homeSaga
