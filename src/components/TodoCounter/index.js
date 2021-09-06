import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Completaste {completedTodos} de {totalTodos} POYO's TODO
    </h2>
  );
}

export { TodoCounter };