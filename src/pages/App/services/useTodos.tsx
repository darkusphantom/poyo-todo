import { deleteTask, updateTask } from '../../../services/notionTasks'
import { useState } from 'react'
import { CreateTask } from '../../../interfaces/task.interface'
import { useTasks } from './useNotionAPI'
import { getFormatTask } from '../../../utils/notionProperties'

/**
 * Custom hook for managing todos. Manages todo state, adding, completing, and deleting all todos.
 *
 * @return {Object} Object containing states and functions to update todo state
 */
const useTodos = (todos: any) => {
    const { saveTask } = useTasks()

    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const completedTodos = todos.filter((todo: any) => !!todo.completed).length
    const totalTodos = todos.length

    let searchedTodos = []

    if ((!searchValue.length as any) >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter((todo: any) => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        })
    }

    const addTodo = (newTodo: CreateTask) => {
        const newTodos = [...todos]
        saveTask(newTodo).then((res: any) => {
            const newTask = res.data
            const formatNewTask = getFormatTask([newTask])
            newTodos.push(...formatNewTask)
        })
    }

    const completeTodo = (text: any) => {
        const todoIndex = todos.findIndex((todo: any) => todo.text === text)
        const newTodos = [...todos]
        if (newTodos[todoIndex].completed === true) {
            newTodos[todoIndex].completed = false
        } else {
            newTodos[todoIndex].completed = true
        }
        updateTask(newTodos[todoIndex])
        // saveTodos(newTodos)
    }

    const deleteTodo = (text: any) => {
        const todoIndex = todos.findIndex((todo: any) => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        deleteTask(todos[todoIndex])
    }

    const states = {
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        openModal,
    }

    const updateState = {
        setSearchValue,
        completeTodo,
        addTodo,
        deleteTodo,
        setOpenModal,
    }

    return { states, updateState }
}

export { useTodos }
