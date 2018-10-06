import * as React from 'react'

import {IBookEntity} from '@src/models'

class BookItem extends React.Component<IBookEntity, {}> {
  public render() {
    const {name, author, price} = this.props
    return (
      <div>
        <h3>{name}</h3>
        <p>Author: {author},Price: ${price}</p>
      </div>
    )
  }
}

export default BookItem
