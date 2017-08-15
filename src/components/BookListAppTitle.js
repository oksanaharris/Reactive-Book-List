import React from 'react';
//always have to import React from react now in every file
import logo from '../logo.svg';
//no longer using require, we use import
//and using export default instead of module export

const BookListAppTitle = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>
);

export default BookListAppTitle;