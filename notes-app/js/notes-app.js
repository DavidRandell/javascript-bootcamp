const notes = getSavedNotes()

// Search filter text
const filters = {
    searchText: ''
}

renderNotes(notes, filters)

// Search input listener
document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// Add note button
document.querySelector('#add-note').addEventListener('click', function(e){
    notes.push({
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
})

document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})