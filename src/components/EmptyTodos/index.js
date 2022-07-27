import React from 'react';
import './EmptyTodos.css'

const EmptyTodos = () => {
  return(
    <p className="TodoList-p TodoList--new">
      Crea un TODO en el botón (+) para comenzar
    </p>
  );
};

export { EmptyTodos };
