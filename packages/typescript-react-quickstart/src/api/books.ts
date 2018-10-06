import config from '@src/config'
import {IBookEntity} from '@src/models'

export function fetchBooks() {
  return fetch(`${config.interface_addr}/books`).then(
    // Response类在dom lib中已经定义
    (response: Response) => response.json(),
  ).then((response: JSONResponse<{books: IBookEntity[]}>) => {
    if (response.code === 0) {
      return Promise.resolve(response.data.books)
    } else {
      return Promise.reject(new Error('get book list error!'))
    }
  })
}
