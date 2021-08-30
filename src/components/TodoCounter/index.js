import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const TodoCounter = () => {
	const { totalTodos, completedTodos } = useContext(TodoContext);

	return (
		<h2 className="TodoCounter">Has Completado {completedTodos} de {totalTodos} Poyo TODOs</h2>
	);
}

export { TodoCounter };