import React from 'react';

const BookFilterInput = ({setSearchFilter}) => (
  <input
  type="text"
  placeholder="Filter..."
  onChange={setSearchFilter}
  />
);

export default BookFilterInput;