import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch({ placeholder }) {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
	    placeholder={placeholder}
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };