import React from 'react'
import { update, destroy } from 'client/actions/todoActions'

export default class TodoItem extends React.Component {
	
	toggleTodo() {
		const { todo } = this.props
		const updatedTodo = {...todo, is_completed: !Boolean(todo.is_completed)}
		
		update(updatedTodo)
	}

	render() {
		const { id, text, is_completed } = this.props.todo
		const clazz = `bb-todo-item${is_completed ? ' bb-todo-item--done' : ''}`
		
		return (
			<div class={ clazz } onClick={() => this.toggleTodo()}>{ text }</div>
		);
	}
}