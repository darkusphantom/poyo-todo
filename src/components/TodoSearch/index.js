import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Busca un POYO Todo"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
