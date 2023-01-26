const todos = [{
	text: 'Buy Groceries',
	completed: false
}, {
	text: 'Gas up the Car',
	completed: false
}, {
	text: 'Pick up the kids',
	completed: true
}, {
	text: 'Hit the gym',
	completed: false
}, {
	text: 'Eat Lunch',
	completed: true
}]

// 1. Setup a div to contain the Todos list
// 2. Setup filters (searchText) and wire up a new filter input to change it
// 3. Create a renderTodos function to render and rerender the latest filtered Data

// STARTS

// Search/Filter input text object 
const filters = {
	searchText: ''
}

const renderTodos = function(todos, filters) {
	//filter todos based on the search value
	const filteredTodos = todos.filter(function(todo){
		return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
	})
	// Incomplete Todos
	const incompleteTodos = filteredTodos.filter(function(todo){
		return !todo.completed
	})

	// Clear Todos before rerendering
	document.querySelector('#todos').innerHTML = ''

	const summary = document.createElement('h3')
	summary.textContent = `You have ${incompleteTodos.length} todos left`
	document.querySelector('#todos').appendChild(summary)

	// Render All Todos
	filteredTodos.forEach(function(todo){
		const p = document.createElement('p')
		p.className = 'todo'
		p.textContent = todo.text
		document.querySelector('#todos').appendChild(p)
	})
}

renderTodos(todos, filters)

document.querySelector('#filter').addEventListener('input', function(e){
	filters.searchText = e.target.value
	// Re-render the todos list
	renderTodos(todos, filters)
})





// Functionality Stuff

document.querySelector('#addTodo').addEventListener('click', function(){
	console.log('Adding a new Todo!')
})

// Listen for new todos text change

document.querySelector('#new-todo-text').addEventListener('input', function(e){
 console.log(e.target.value)
})