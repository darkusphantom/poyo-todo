import { useTodos } from './services/useTodos'
import { TodoHeader } from './components/TodoHeader'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './containers/TodoList'
import { TodoItem } from './components/TodoItem'
import { TodosError } from './components/TodosError'
import { TodosLoading } from './components/TodosLoading'
import { EmptyTodos } from './components/EmptyTodos'
import { EmptySearchTodos } from './components/EmptySearchTodos'
import { TodoForm } from './containers/TodoForm'
import { CreateTodoButton } from './components/CreateTodoButton'
import { Modal } from './components/Modal'
import { ChangeAlertWithStorageListener } from './components/ChangeAlert'
import { Flex } from '@chakra-ui/react'
import { TodoTab } from './components/TodoTab'
import { Fragment } from 'react/jsx-runtime'
import { TaskItem } from '../../interfaces/task.interface'

const App = () => {
    const { states, updateState } = useTodos()

    const {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        openModal,
        sincronizeTodos,
    } = states

    const { setSearchValue, completeTodo, addTodo, deleteTodo, setOpenModal } =
        updateState

    const todoTasksContent = () => {
        return (
            <TodoList
                error={error}
                loading={loading}
                totalTodos={totalTodos}
                searchedTodos={searchedTodos}
                searchText={searchValue}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchTodos={(searchText: any) => (
                    <EmptySearchTodos searchText={searchText} />
                )}
            >
                {(todo: TaskItem) => (
                    <TodoItem
                        key={todo.url}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            </TodoList>
        )
    }

    return (
        <Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <Flex alignContent="center" justifyContent="center">
                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </Flex>
            </TodoHeader>

            <TodoTab todayTaskList={todoTasksContent} />
            {!!openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />

            <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
        </Fragment>
    )
}

export default App
