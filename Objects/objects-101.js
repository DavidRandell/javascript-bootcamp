let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326  
}

console.log(`${myBook.title} by ${myBook.author} is ${myBook.pageCount} pages long.`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author} is ${myBook.pageCount} pages long.`)

let person = {
    name: 'David',
    age: 52,
    city: 'Dublin'
}

console.log(`${person.name} is ${person.age} years old and hails from ${person.city}.`)

person.age += 1

console.log(`${person.name} is ${person.age} years old and hails from ${person.city}.`)

