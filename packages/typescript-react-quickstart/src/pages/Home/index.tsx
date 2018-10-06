import * as React from 'react'
import {connect} from 'react-redux'

import {IRootState} from '@src/reducer'
import {IBookState} from './reducers'

import BookItem from '@src/components/BookItem'

interface IHomePageProps {
  books: IBookState;
}

class Home extends React.Component<IHomePageProps> {
  constructor(public props: IHomePageProps) {
    super(props)
  }
  public render() {
    const {books} = this.props
    const {list} = books
    return (
      <div>
        <h2>welcome!</h2>
        {books.loading && <p>loading...</p>}
        {books.error && <p style={{color: 'red'}}>loading error!</p>}
        {list && list.length && list.map((item) => <BookItem key={item.name} {...item} />)}
      </div>
    )
  }
}

export {default as reducer, IState} from './reducers'
export {default as saga} from './sagas'
export default connect((state: IRootState) => ({
  books: state.home.books,
}))(Home)
