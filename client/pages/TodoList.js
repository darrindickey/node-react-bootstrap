import React from 'react'
import { connect } from 'react-redux'

import { fetchAll, deleteCompleted } from 'client/actions/todoActions'

import FilterTodo from 'client/components/TodoFilterForm'
import CreateTodo from 'client/components/TodoCreateForm'
import Todo from 'client/components/Todo'

@connect((store) => {
	return {
		todos: store.todo.items,
		showCompleted: store.todo.showCompleted,
		query: store.todo.query
	}
})

export default class TodoList extends React.Component {
	
	componentWillMount() {
		fetchAll()
	}

	getFilteredTodos(completed = false) {
		const { todos, showCompleted, query } = this.props;

		return todos.filter((todo) => {
			if (query) {
				const text = todo.text.toLowerCase()
				
				if (text.indexOf(query.toLowerCase()) === -1) {
					return false;
				}
			}

			const todoIsCompleted = Boolean(todo.is_completed)

			if (!showCompleted && todoIsCompleted) {
				return false;
			}

			return todoIsCompleted === completed
		})
	}

	createTodoList(todos) {
		return todos.map((todo) => {
			return <Todo key={todo.id} todo={todo} />
		})
	}

	render() {
		const unDoneTodos = this.createTodoList(this.getFilteredTodos(false))
		const doneTodos = this.createTodoList(this.getFilteredTodos(true))
		
		const { showCompletedOnly, query } = this.props;

		return (
			<div class="bb-page bb-page-todo-list">
				<h1 class="bb-h1">Todos</h1>
				<FilterTodo showCompleted={this.showCompleted} query={this.query} />
				<CreateTodo />
				<div class="bb-todo-list">{ unDoneTodos }</div>

				{ doneTodos.length > 0 &&
					<div class="bb-todo-list bb-todo-list--done">{ doneTodos }</div>
				}

				{ doneTodos.length > 0 &&
					<div class="bb-todo-delete">
						<button class="bb-button bb-button--red" onClick={ deleteCompleted }>Delete completed</button>
					</div>
				}
			</div>
		);
	}
}

