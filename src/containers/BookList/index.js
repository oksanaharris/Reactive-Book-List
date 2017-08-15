import React, { Component } from 'react';
import { getBooksFromFakeXHR } from '../../lib/books.db';
import { addBookToFakeXHR } from '../../lib/books.db';
import Book from '../../components/Book';
import NewBookForm from '../NewBookForm';
import BookFilterInput from '../../components/BookFilterInput';


class BookList extends Component {
  constructor(){
    super();

    this.state = {
      books: [],
      searchFilter: ''
    }

    this.addBook = this.addBook.bind(this);
    this.setSearchFilter = this.setSearchFilter.bind(this);
  }

  addBook(book){
    addBookToFakeXHR(book)
    .then(newBooksArr => {
      this.setState({books: newBooksArr});
    });
  }

  componentDidMount() {
    getBooksFromFakeXHR().then(result => {
      this.setState({books: result})
    });
  }

  setSearchFilter(event){
    const searchFilter = event.target.value;
    this.setState({searchFilter});
  }


  render() {
    return (
      <div className="App-BookList">
        <BookFilterInput setSearchFilter={this.setSearchFilter}/>
        <ul>
          {this.state.books
            .filter(book => {
              return book.title.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) > -1 ||
              book.author.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) > -1;
            })
            .map(book =>
              <Book key={book._id} title={book.title} author={book.author} />
              )
          }
        </ul>
        <NewBookForm addBook={this.addBook}/>
      </div>
    );
  }
};

export default BookList;




