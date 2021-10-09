import React from 'react'
import { Editor } from './Editor'
import { useSelector, useDispatch } from 'react-redux'
import {} from '../../store/todo-actions'

export function EditorContainer() {
	const dispatch = useDispatch()
	const items = useSelector(store => store.todos)
	const handleTextChange = (item, value) => {
		console.log(item, value)
	}

	const handleToggle = (item, value) => {
		console.log(item, value)
	}

	const handleRemove = item => {
		console.log(item)
	}

	return (
		<Editor
			items={items}
			onTextChange={handleTextChange}
			onToggle={handleToggle}
			onRemove={handleRemove}
		/>
	)
}
