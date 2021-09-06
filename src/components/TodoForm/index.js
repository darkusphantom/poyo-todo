import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
	const [newTodoValue, setNewTodoValue] = React.useState('');
	const {
		addTodo,
		setOpenModal,
	} = React.useContext(TodoContext);

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	}

	const onCancel = () => {
		setOpenModal(false);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	}

	return (
		<form
			className="todoForm"
			onSubmit={onSubmit} >
			<label
				className="todoForm__label"
				htmlFor="todoTextarea">Escribe tu Tarea</label>
			<textarea
				className="todoForm__textarea"
				id="todoTextarea"
				name="todoTextarea"
				value={newTodoValue}
				onChange={onChange}
				placeholder="Escribe un Poyo TODO"
			>
			</textarea>
			<div className="container__btn">
				<button
					className="btn btn--cancel"
					type="button"
					onClick={onCancel}
				>
					Cancelar
				</button>
				<button
					className="btn btn--add"
					type="submit"
				>
					Añadir Todo
				</button>
			</div>
		</form>
	)
}

export { TodoForm };