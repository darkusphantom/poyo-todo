import React from 'react';

const EmptySearchTodos = (props) => {
  return(
    <p className="TodoList-p TodoList--new">No hay ninguna coincidencia con {props.searchText}</p>
  );
};

export { EmptySearchTodos };
