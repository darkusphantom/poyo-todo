import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {props.searchedTodos.map(todo => props.render(todo))}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchTodos(renderFunc)}
  
    </section>
  );
}

export { TodoList };
