import React, { Fragment } from 'react';
import { TodoSearch } from '../TodoSearch';
import './AddTodo.css';

function AddTodo() {
  const placeholder = 'Ingresa un POYO Todo';
  const onClickAddTodo = () => {
    return (
      console.log("Add Todo")
    )
  }

  const onClickCancelAddTodo = () => {
    return (
      console.log("Cancel Add Todo")
    )
  }

  return (
    <Fragment>
      <div className="AddTodo">
        <TodoSearch placeholder={placeholder} />
      </div>
    </Fragment>
  );
}

export { AddTodo };

/*
<button
          className="btn btn--add"
          onClick={onClickAddTodo}
        </button>
        <button
          className="btn btn--cancel"
          onClick={onClickCancelAddTodo}
        </button>

 */