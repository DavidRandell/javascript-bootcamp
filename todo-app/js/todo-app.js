// Main Todo App JS file

const todos = getSavedTodos()

// Search/Filter input text object 
const filters = {
	searchText: '',
	hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#filter').addEventListener('input', function(e){
	filters.searchText = e.target.value
	// Re-render the todos list
	renderTodos(todos, filters)
})

// Functionality Stuff

document.querySelector('#new-todo').addEventListener('submit', function(e){
	e.preventDefault()
	todos.push({
		text: e.target.elements.text.value,
		completed: false
	})
	saveTodos(todos)
	renderTodos(todos, filters)
	e.target.elements.text.value = ''
})


// Hide Completed functionality
document.querySelector('#hide-completed').addEventListener('change', function(e){
	filters.hideCompleted = e.target.checked
	renderTodos(todos, filters)
})


