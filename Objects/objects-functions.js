let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326  
}

let otherBook = {
    title: 'Dances with Wolves',
    author: 'Michael Blake',
    pageCount: 423  
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}   

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(otherBookSummary.pageCountSummary)

//create a function that takes farenheight in and converts to both C and K

let tempConverter = function(f){
    return {
        farenheight: f,
        celcius: (f - 32) * (5/9),
        kelvin: (f + 459.67) * (5/9)
    }
}

let conversion = tempConverter(74)

console.log(conversion)