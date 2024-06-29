import { useTodos } from './services/useTodos'
import { TodoHeader } from './components/TodoHeader'
import { TodoForm } from './containers/TodoForm'
import { CreateTodoButton } from './components/CreateTodoButton'
import { Modal } from './components/Modal'
import { ChangeAlertWithStorageListener } from './components/ChangeAlert'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { Fragment } from 'react/jsx-runtime'
import { useTasks } from './services/useNotionAPI'
import { TodoTasksContent } from './components/TodoListContent'

const App = () => {
    const {
        tasksNotCompleted,
        tasksToday,
        tasksToBeDone,
        tasksForSomeday,
        tasksTomorrow,
    } = useTasks()
    const { states, updateState } = useTodos(tasksNotCompleted)
    const { states: taskTodayState, updateState: updateStateTaskToday } =
        useTodos(tasksToday)
    const { states: taskToBeDoneState, updateState: updateStateTaskToBeDone } =
        useTodos(tasksToBeDone)
    const { states: taskSomedayState, updateState: updateStateTaskSomeday } =
        useTodos(tasksForSomeday)

    const { states: tasksForTomorrow, updateState: updateStateTaskTomorrow } =
        useTodos(tasksTomorrow)

    const {
        loading,
        error,
        totalTodos,
        searchValue,
        searchedTodos,
        openModal,
        sincronizeTodos,
    } = states

    const { setSearchValue, completeTodo, addTodo, deleteTodo, setOpenModal } =
        updateState

    return (
        <Fragment>
            <TodoHeader loading={loading}>
                <Tabs isFitted variant="enclosed">
                    <TabList mb="1em">
                        <Tab>All</Tab>
                        <Tab>Today</Tab>
                        <Tab>Tomorrow</Tab>
                        <Tab>For to do</Tab>
                        <Tab>Someday</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <TodoTasksContent
                                error={error}
                                loading={loading}
                                totalTodos={totalTodos}
                                searchedTodos={searchedTodos}
                                searchText={searchValue}
                                setSearchValue={setSearchValue}
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
                            />
                        </TabPanel>
                        <TabPanel>
                            <TodoTasksContent
                                error={taskTodayState.error}
                                loading={taskTodayState.loading}
                                totalTodos={taskTodayState.totalTodos}
                                searchedTodos={taskTodayState.searchedTodos}
                                searchText={searchValue}
                                setSearchValue={
                                    updateStateTaskToday.setSearchValue
                                }
                                completeTodo={taskTodayState.completedTodos}
                                deleteTodo={deleteTodo}
                            />
                        </TabPanel>
                        <TabPanel>
                            <TodoTasksContent
                                error={tasksForTomorrow.error}
                                loading={tasksForTomorrow.loading}
                                totalTodos={tasksForTomorrow.totalTodos}
                                searchedTodos={tasksForTomorrow.searchedTodos}
                                searchText={searchValue}
                                setSearchValue={
                                    updateStateTaskTomorrow.setSearchValue
                                }
                                completeTodo={tasksForTomorrow.completedTodos}
                                deleteTodo={deleteTodo}
                            />
                        </TabPanel>
                        <TabPanel>
                            <TodoTasksContent
                                error={taskToBeDoneState.error}
                                loading={taskToBeDoneState.loading}
                                totalTodos={taskToBeDoneState.totalTodos}
                                searchedTodos={taskToBeDoneState.searchedTodos}
                                searchText={searchValue}
                                setSearchValue={
                                    updateStateTaskToBeDone.setSearchValue
                                }
                                completeTodo={taskToBeDoneState.completedTodos}
                                deleteTodo={deleteTodo}
                            />
                        </TabPanel>
                        <TabPanel>
                            <TodoTasksContent
                                error={taskSomedayState.error}
                                loading={taskSomedayState.loading}
                                totalTodos={taskSomedayState.totalTodos}
                                searchedTodos={taskSomedayState.searchedTodos}
                                searchText={searchValue}
                                setSearchValue={
                                    updateStateTaskSomeday.setSearchValue
                                }
                                completeTodo={taskSomedayState.completedTodos}
                                deleteTodo={deleteTodo}
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </TodoHeader>

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
