import React from 'react'
import { create } from 'client/actions/todoActions'

export default class CreateTodo extends React.Component {

	constructor() {
		super()
		this.handleCreateTodo = this.handleCreateTodo.bind(this)
	}
	
	handleCreateTodo(e) {
		e.preventDefault()
		const text = this.createTodoInput.value

		if (text) {
			create({text})	
			this.createTodoInput.value = ''
		}
	}

	render() {
		return (
			<form onSubmit={this.handleCreateTodo} class="bb-todo-create">
				<input 
					class="bb-input bb-input--text" 
					placeholder="create .."
					ref={(input) => this.createTodoInput = input} />

				<button type="submit" class="bb-button bb-button--blue">Add</button>
			</form>
		);
	}
}
