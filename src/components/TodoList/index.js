import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="TodoList-container">
      { /*Muestra error*/}
      {props.error && props.onError()}

      { /*Muestra el loader */}
      {props.loading && props.onLoading()}

      { /*Muestra el loader si no esta cargando y no hay todos */}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      { /*No realiza la busqueda si la lista de todos está vacia */}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchTodos(props.searchText)}

      { /*Realiza la búsqueda in real time */}
      {/*props.searchedTodos.map(todo => props.render(todo))*/}
      {props.searchedTodos.map(renderFunc)}
    </section>
  );
}

export { TodoList };
