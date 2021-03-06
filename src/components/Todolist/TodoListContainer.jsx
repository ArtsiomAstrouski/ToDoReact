import React from 'react'
import { TodoList } from './TodoList'
import { useSelector } from 'react-redux'

export function TodoListContainer() {
	const doneItems = useSelector(state => state.todos.filter(item => item.done))
	const todoItems = useSelector(state => state.todos.filter(item => !item.done))

	return <TodoList doneItems={doneItems} todoItems={todoItems} />
}
