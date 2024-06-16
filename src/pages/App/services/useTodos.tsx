import React from 'react'
import { useLocalStorage } from './useLocalStorage'

/**
 * Custom hook for managing todos. Manages todo state, adding, completing, and deleting all todos.
 *
 * @return {Object} Object containing states and functions to update todo state
 */
const useTodos = (todos: any) => {
    const {
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage('TODO_V1', [])
    // const { tasksNotCompleted: todos } = useTasks()

    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)

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

    const addTodo = (text: any) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text,
        })
        // saveTodos(newTodos)
    }

    const completeTodo = (text: any) => {
        const todoIndex = todos.findIndex((todo: any) => todo.text === text)
        const newTodos = [...todos]
        if (newTodos[todoIndex].completed === true) {
            newTodos[todoIndex].completed = false
        } else {
            newTodos[todoIndex].completed = true
        }
        saveTodos(newTodos)
    }

    const deleteTodo = (text: any) => {
        const todoIndex = todos.findIndex((todo: any) => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        // saveTodos(newTodos)
    }

    const states = {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        openModal,
        sincronizeTodos,
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
