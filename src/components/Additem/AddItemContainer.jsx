import React from 'react'
import { useDispatch } from 'react-redux'
import { AddItem } from './AddItem'

import { addTodo } from '../../store/todo-actions'

export function AddItemContainer() {
	const dispatch = useDispatch()
	const handleAdd = text => {
		dispatch(addTodo(text))
	}

	return <AddItem onAdd={handleAdd} />
}
