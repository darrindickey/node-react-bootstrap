import React from 'react'
import { fetchAllTodos, deleteCompletedTodos } from '../../actions/todoActions'
import { connect } from 'react-redux'

import FilterTodo from './FilterTodo'
import CreateTodo from './CreateTodo'
import Todo from './Todo'

@connect((store) => {
	return {
		todos: store.todos.items,
		showCompleted: store.todos.showCompleted,
		query: store.todos.query
	}
})

export default class TodoPage extends React.Component {
	
	componentWillMount() {
		fetchAllTodos()
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
			<div>
				<h1 class="bb-h1">Todos</h1>
				<FilterTodo showCompleted={this.showCompleted} query={this.query} />
				<CreateTodo />
				<div class="bb-todo-list">{ unDoneTodos }</div>

				{ doneTodos.length > 0 &&
					<div class="bb-todo-list bb-todo-list--done">{ doneTodos }</div>
				}

				{ doneTodos.length > 0 &&
					<div class="bb-todo-delete">
						<button class="bb-button bb-button--red" onClick={ deleteCompletedTodos }>Delete completed</button>
					</div>
				}
			</div>
		);
	}
}

