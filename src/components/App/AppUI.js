import React from 'react';
import '../Header/Header.css';
import { TodoContext } from '../TodoContext';
import { AddTodo } from '../AddTodo';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch placeholder={"Busca un POYO Todo"} />

      <TodoList>
        {error && <p>¡Poyo! ¡Poyo! ¡Poyo! ¡Hubo un error!</p>}
        {loading && <p>Estamos cargando, ¡poyo!</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu POYO todo</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <AddTodo />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };

/*
const defaultTodos = [
  {
    text: 'Alabar a Kirby',
    completed: true
  },
  {
    text: 'Tomar un abrazo',
    completed: false
  },
  {
    text: 'Llorar con la Llorona',
    completed: false
  },
]

 */