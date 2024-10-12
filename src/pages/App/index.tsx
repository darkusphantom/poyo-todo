import React, { useState } from 'react'
import { TodoHeader } from './components/TodoHeader'
import { TodoForm } from './containers/TodoForm'
import { CreateTodoButton } from './components/CreateTodoButton'
import { Modal } from './components/Modal'
import { ChangeAlertWithStorageListener } from './components/ChangeAlert'
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { Fragment } from 'react/jsx-runtime'
import { useTasks } from './services/useNotionAPI'
import { TodoTasksContent } from './components/TodoListContent'
import { HeaderPage } from './components/Header'
import { TaskItem } from '../../interfaces/task.interface'

const App: React.FC = () => {
    const {
        notCompleted,
        today,
        tomorrow,
        toBeDone,
        someday,
        loading,
        saveTask,
        completeTask,
        deleteTask,
        refetchTasks,
    } = useTasks()

    const [openModal, setOpenModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const handleAddTodo = async (newTodo: any) => {
        await saveTask(newTodo)
        setOpenModal(false)
    }

    const handleCompleteTodo = async (task: TaskItem) => {
        task.completed = !task.completed
        await completeTask(task)
    }

    const handleDeleteTodo = async (task: TaskItem) => {
        await deleteTask(task)
    }

    return (
        <Fragment>
            <HeaderPage />
            <Box my="0" px="24px" bg="#ffcbcf" position="relative" minH="100vh">
                <TodoHeader loading={loading}>
                    <Tabs isFitted variant="enclosed">
                        <TabList mb="1em">
                            <Tab>Today</Tab>
                            <Tab>Tomorrow</Tab>
                            <Tab>For to do</Tab>
                            <Tab>Someday</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <TodoTasksContent
                                    error={null}
                                    loading={loading}
                                    totalTodos={today.length}
                                    searchedTodos={today}
                                    searchText={searchValue}
                                    setSearchValue={setSearchValue}
                                    completeTodo={handleCompleteTodo}
                                    deleteTodo={handleDeleteTodo}
                                />
                            </TabPanel>
                            <TabPanel>
                                <TodoTasksContent
                                    error={null}
                                    loading={loading}
                                    totalTodos={tomorrow.length}
                                    searchedTodos={tomorrow}
                                    searchText={searchValue}
                                    setSearchValue={setSearchValue}
                                    completeTodo={handleCompleteTodo}
                                    deleteTodo={handleDeleteTodo}
                                />
                            </TabPanel>
                            <TabPanel>
                                <TodoTasksContent
                                    error={null}
                                    loading={loading}
                                    totalTodos={toBeDone.length}
                                    searchedTodos={toBeDone}
                                    searchText={searchValue}
                                    setSearchValue={setSearchValue}
                                    completeTodo={handleCompleteTodo}
                                    deleteTodo={handleDeleteTodo}
                                />
                            </TabPanel>
                            <TabPanel>
                                <TodoTasksContent
                                    error={null}
                                    loading={loading}
                                    totalTodos={someday.length}
                                    searchedTodos={someday}
                                    searchText={searchValue}
                                    setSearchValue={setSearchValue}
                                    completeTodo={handleCompleteTodo}
                                    deleteTodo={handleDeleteTodo}
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </TodoHeader>

                {!!openModal && (
                    <Modal>
                        <TodoForm
                            addTodo={handleAddTodo}
                            setOpenModal={setOpenModal}
                        />
                    </Modal>
                )}

                <CreateTodoButton setOpenModal={setOpenModal} />

                <ChangeAlertWithStorageListener sincronize={refetchTasks} />
            </Box>
        </Fragment>
    )
}

export default App
