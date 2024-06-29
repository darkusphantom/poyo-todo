import { Box, Button, Textarea, Text, Select } from '@chakra-ui/react'
import { useState } from 'react'

const TodoForm = ({ addTodo, setOpenModal }: any) => {
    const [newTodoValue, setNewTodoValue] = useState('')
    const [newTodoPriority, setNewTodoPriority] = useState('')
    const [newTodoArea, setNewTodoArea] = useState('')
    const [newTodoEffort, setNewTodoEffort] = useState('')
    const [newTodoType, setNewTodoType] = useState('')

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target
        setNewTodoValue(value)
    }
    const onChangeSelect = (
        event: React.ChangeEvent<HTMLSelectElement>,
        setTodoState: (todo: string) => void
    ) => {
        const { value } = event.target
        setTodoState(value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event: any) => {
        event.preventDefault()
        const newTodo = {
            title: newTodoValue,
            priority: newTodoPriority,
            area: newTodoArea,
            effort: newTodoEffort,
            type: newTodoType,
        }
        addTodo(newTodo)
        setOpenModal(false)
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="80%"
            maxWidth="500px"
            height="60vh"
            background="#ffcbcf"
            borderRadius="20px"
        >
            <Text
                as="h2"
                fontSize="1.2rem"
                fontWeight="bold"
                letterSpacing="5px"
                marginBottom="10px"
            >
                Crea una nueva tarea
            </Text>

            <Box marginBottom="10px">
                <Select
                    placeholder="Prioridad"
                    width="80%"
                    marginBottom="10px"
                    bg="#fff"
                    fontSize="12px"
                    value={newTodoPriority}
                    onChange={(event) =>
                        onChangeSelect(event, setNewTodoPriority)
                    }
                >
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P3">P3</option>
                    <option value="P4">P4</option>
                </Select>

                <Select
                    placeholder="Esfuerzo"
                    width="80%"
                    marginBottom="10px"
                    bg="#fff"
                    fontSize="12px"
                    value={newTodoEffort}
                    onChange={(event) =>
                        onChangeSelect(event, setNewTodoEffort)
                    }
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Select>

                <Select
                    placeholder="Área"
                    width="80%"
                    marginBottom="10px"
                    bg="#fff"
                    fontSize="12px"
                    value={newTodoArea}
                    onChange={(event) => onChangeSelect(event, setNewTodoArea)}
                >
                    <option value="🌱 Crecimiento Personal">
                        🌱 Crecimiento Personal
                    </option>
                    <option value="📚 Estudios">📚 Estudios</option>
                    <option value="💌 Relaciones Personales">
                        💌 Relaciones Personales
                    </option>
                    <option value="🥦 Salud">🥦 Salud</option>
                    <option value="💼 Trabajo">💼 Trabajo</option>
                    <option value="🤑 Finanzas">🤑 Finanzas</option>
                    <option value="📝 Organización">📝 Organización</option>
                </Select>

                <Select
                    placeholder="Tipo"
                    width="80%"
                    bg="#fff"
                    fontSize="12px"
                    value={newTodoType}
                    onChange={(event) => onChangeSelect(event, setNewTodoType)}
                >
                    <option value="📩 Recordatorio">📩 Recordatorio</option>
                    <option value="📥 Bandeja de Entrada">
                        📥 Bandeja de Entrada
                    </option>
                    <option value="✅ Accionable">✅ Accionable</option>
                    <option value="🗒️ Para hacer">🗒️ Para hacer</option>
                    <option value="✨ Algun dia">✨ Algun dia</option>
                    <option value="🗑️ Papelera">🗑️ Papelera</option>
                </Select>
            </Box>
            <Text
                as="label"
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
            <Box
                className="container__btn"
                width="80%"
                display="flex"
                flexDirection="row-reverse"
                justifyContent="space-around"
            >
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
                        background: '#80858a',
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
                        background: '#fe6074',
                    }}
                    onClick={onSubmit}
                >
                    Añadir Todo
                </Button>
            </Box>
        </Box>
    )
}

export { TodoForm }
