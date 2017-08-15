import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(){
    super();

    this.state = {
      newTitle: '',
      newAuthor: ''
    }

    this.titleChange = this.titleChange.bind(this);
    this.authorChange = this.authorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  titleChange(event){
    this.setState({
      newTitle: event.target.value
    });
  }

  authorChange(event){
    this.setState({
      newAuthor: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addBook({
      title: this.state.newTitle,
      author: this.state.newAuthor
    });

    this.setState({
      newTitle: '',
      newAuthor: ''
    });
  }

  render (){
    return (
      <div>
        <input type="text" placeholder="Title" onChange={ this.titleChange } value={ this.state.newTitle }/>
        <input type="text" placeholder="Author" onChange={ this.authorChange } value={ this.state.newAuthor }/>
        <button type="submit" onClick={ this.handleSubmit }>Add Book</button>
      </div>
    );
  }
}



export default NewBookForm;

//,feqfjoefekl;afejemdm