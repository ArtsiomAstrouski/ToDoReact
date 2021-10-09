import React from 'react'
import { useDispatch } from 'react-redux'
import { AddItem } from './AddItem'
import { v4 as uuid } from 'react-uuid'

export function AddItemContainer() {
	const dispatch = useDispatch()
	const handleAdd = text => {
		dispatch({
			type: 'ADD_TODO',
			payload: {
				id: uuid(),
				text,
				done: false,
			},
		})
	}

	return <AddItem onAdd={handleAdd} />
}
