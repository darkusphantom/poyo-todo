import React, { Fragment } from 'react';
import '../Header/Header.css';
import { TodoContext } from '../TodoContext';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
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
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <Fragment>
      <TodoHeader>
        <TodoCounter>
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        </TodoCounter>
        <TodoSearch placeholder={"Busca un POYO Todo"}>
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        </TodoSearch>
      </TodoHeader>

      <TodoList>
        {error && <p className="TodoList-p TodoList--error">¡Poyo! ¡Poyo! ¡Poyo! ¡Hubo un error!</p>}
        {loading && <p className="TodoList-p TodoList--loading">Estamos cargando, ¡Poyo!</p>}
        {(!loading && !searchedTodos.length) && <p className="TodoList-p TodoList--new">Crea tu POYO todo</p>}

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
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </Fragment>
  );
}

export { AppUI };
