import React from 'react';
import './TodoSearch.css';

function TodoSearch({ placeholder, searchValue, setSearchValue }) {
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
