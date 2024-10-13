import { Flex } from '@chakra-ui/react'
import { TaskItem } from '../../../../interfaces/task.interface'
import { TodoList } from '../../containers/TodoList'
import { EmptySearchTodos } from '../EmptySearchTodos'
import { EmptyTodos } from '../EmptyTodos'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodosError } from '../TodosError'
import { TodosLoading } from '../TodosLoading'
import { TodoSearch } from '../TodoSearch'
import { Fragment } from 'react/jsx-runtime'

/**
 * Renders the content of the todo tasks.
 *
 * @param {any} error - Indicates if there is an error.
 * @param {any} loading - Indicates if content is loading.
 * @param {any} totalTodos - Total number of todos.
 * @param {any} searchedTodos - Todos that have been searched.
 * @param {any} searchValue - The value used for searching.
 * @param {Function} setSearchValue - Function to set the search value.
 * @param {Function} completeTodo - Function to mark a todo as complete.
 * @param {Function} deleteTodo - Function to delete a todo.
 * @return {JSX.Element} The JSX for rendering the todo tasks content.
 */
const TodoTasksContent = ({
    error,
    loading,
    totalTodos,
    searchedTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
}: any) => {
    return (
        <Fragment>
            <Flex alignContent="center" justifyContent="center">
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </Flex>
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
                        type={todo.type}
                        limitDate={todo.limitDate}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo)}
                        onDelete={() => deleteTodo(todo)}
                    />
                )}
            </TodoList>
        </Fragment>
    )
}

export { TodoTasksContent }
