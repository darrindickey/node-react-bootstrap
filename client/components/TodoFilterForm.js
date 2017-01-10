import React from 'react'
import { updateSearchQuery, updateDoneFilter } from '../actions/todoActions'

export default class FilterTodo extends React.Component {

	render() {
		const { query, showCompleted } = this.props

		return (
			<div class="bb-todo-filter">
				<input 
					class="bb-input bb-input--text" 
					placeholder="Search .."
					value={query} 
					ref={(input) => this.queryInput = input}
					onChange={() => updateSearchQuery(this.queryInput.value)} />

				<input 
					class="bb-todo-filter__checkbox" 
					type="checkbox" 
					checked={showCompleted} 
					ref={(input) => this.showCompletedCheckbox = input}
					onChange={() => updateDoneFilter(this.showCompletedCheckbox.checked)} />

				<span className="bb-todo-filter__checkbox-text">Show completed</span>
			</div>
		);
	}
}