import React from 'react';
import './TodosLoading.css'

const TodosLoading = () => {
  return(
    <div className="loadingTodo-container">
      <span className="loadingTodo-completeIcon"></span>
      <p className="loadingTodo-text">Cargando TODOs... (POYO...)</p>
      <span className="loadingTodo-deleteIcon"></span>
    </div>
  );
};

export { TodosLoading };
