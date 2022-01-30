import React from 'react';

const EmptySearchTodos = ({ searchText }) => {
  console.log(searchText);
  return(
    <p className="TodoList-p TodoList--new">
      No hay ninguna coincidencia con <i>{searchText}</i>
    </p>
  );
};

export { EmptySearchTodos };
