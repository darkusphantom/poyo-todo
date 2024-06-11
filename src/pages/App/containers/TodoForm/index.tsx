import { Box, Button, Textarea, Text } from '@chakra-ui/react';
import React from 'react';

const TodoForm = ({
	addTodo,
	setOpenModal,
}: any) => {
	const [newTodoValue, setNewTodoValue] = React.useState('');

	const onChange = (event: any) => {
		setNewTodoValue(event.target.value);
	}

	const onCancel = () => {
		setOpenModal(false);
	}

	const onSubmit = (event: any) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	}

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			width="80%"
			maxWidth="500px"
			height="30vh"
			background="#ffcbcf"
			borderRadius="20px"
		>
			<Text
				fontSize="1.2rem"
				fontWeight="bold"
				letterSpacing="5px"
				marginBottom="10px"
			>
				Escribe tu Tarea
			</Text>
			<Textarea
				className="todoForm__textarea"
				id="todoTextarea"
				name="todoTextarea"
				value={newTodoValue}
				onChange={onChange}
				placeholder="Escribe un Poyo TODO"
				width="80%"
				fontSize="0.9rem"
				borderRadius="5px"
				border="2px solid #fe6f74"
				marginBottom="10px"
				bg="#ffff"
			/>
			<Box className="container__btn" width="80%" display="flex" flexDirection="row-reverse" justifyContent="space-around">
				<Button
					type="button"
					onClick={onCancel}
					width="40%"
					maxWidth="160px"
					height="30px"
					borderRadius="10px"
					border="none"
					background="#8a8a8a"
					color="#fff"
					_hover={{
						background: "#80858a",
					}}
				>
					Cancelar
				</Button>
				<Button
					type="submit"
					width="40%"
					maxWidth="160px"
					height="30px"
					borderRadius="10px"
					border="none"
					background="#fe6f74"
					color="#fff"
					_hover={{
						background: "#fe6074",
					}}
					onClick={onSubmit}
				>
					Añadir Todo
				</Button>
			</Box>
		</Box>
	)
}

export { TodoForm };
