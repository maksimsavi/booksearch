import React from 'react';
import BookItem from '../BookItem/BookItem'
class BookList extends React.Component {
      
    render(){
        const list = this.props.results.map((result, i) => <BookItem volume={result} key={i}/>)
        return (
        <ul className="book_list">
            {list}
        </ul>
        )
    }
}
BookList.defaultProps = {results:[]}
export default BookList