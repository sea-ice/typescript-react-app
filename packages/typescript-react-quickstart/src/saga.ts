import {fork} from 'redux-saga/effects'

import {saga as homeSaga} from '@src/pages/Home'

export default function*() {
  yield fork(homeSaga)
}
