import React, { Fragment } from 'react';
import '../Header/Header.css';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

/*
function App() {
  const [state, setState] = React.useState('Estado compartido');

  return (
      <React.Fragment>
        <TodoHeader >
          <TodoCounter />
          <TodoSearch />
        </TodoHeader>

        <TodoList>
          <TodoItem state={state} />
        </TodoList>
      </React.Fragment>
  );
}

function TodoHeader({ children }) {
  return(
    <header>
      {children}
    </header>
  );
}

function TodoList({ children }) {
  return(
    <section className="TodoList-container">
      {children}
    </section>
  );
}

function TodoCounter() {
  return <p>TodoCounter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}

function TodoItem({ state }) {
  return <p>TodoItem: {state}</p>;
}
*/

const App = () => {
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
	  addTodo,
  } = useTodos();

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
          <TodoForm>
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          </TodoForm>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </Fragment>
  );
}

export default App;
