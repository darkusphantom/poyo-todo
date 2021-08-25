import React from 'react';
import './CreateTodoButton.css'

const CreateTodoButton = () => {
	const onCreateTodo = () => {
		console.log("Dorime");
	}

	return (
		<button
			className="CreateTodoButton"
			onClick={() => { onCreateTodo()}}
			>
				+
		</button>
	);
}

export {CreateTodoButton};