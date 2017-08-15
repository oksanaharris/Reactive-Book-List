import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList';

import './styles.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchFilter: ''
    };
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle />
        <BookList />

      </div>
    );
  }
};

export default App;




