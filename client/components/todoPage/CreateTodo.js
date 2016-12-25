import React from 'react'
import { createTodo } from '../../actions/todoActions'

export default class CreateTodo extends React.Component {

	constructor() {
		super()
		this.handleCreateTodo = this.handleCreateTodo.bind(this)
	}
	
	handleCreateTodo(e) {
		e.preventDefault()
		const text = this.createTodoInput.value

		if (text) {
			createTodo(text)	
			this.createTodoInput.value = ''
		}
	}

	render() {
		return (
			<form onSubmit={this.handleCreateTodo} class="bb-todo-create">
				<input 
					class="bb-todo-create__input" 
					placeholder="create .."
					ref={(input) => this.createTodoInput = input} />

				<button type="submit" class="bb-button bb-button--blue">Add</button>
			</form>
		);
	}
}
