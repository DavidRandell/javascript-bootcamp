const notes = [{
    title: "My Next Trip",
    body: "I am going back home to my Canada!"
},{
    title: "Habits to work on.",
    body: "Exercise, Eating a bit better."
},{
    title: "Work on Home DIY",
    body: "Paint my Shed."
},{
    title: "Study",
    body: "Prepare for OOP Exam."
},{
    title: "Next week homework",
    body: "Finish my homework."
}
]

// Search filter text
const filters = {
    searchText: ''
}

// Render filtered notes
const renderNotes = function(notes, filters){

    // filter notes based on the search-text input value
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // clear notes Div before rendering
    document.querySelector('#notes').innerHTML = ''

    // render the filtered notes
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

// Search input listener
document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// Add note button
document.querySelector('#add-note').addEventListener('click', function(e){
    e.target.textContent = "The button was clicked"
})


// Add a new Element 
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This was created by JS!'
// document.querySelector('main').appendChild(newParagraph)


document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})