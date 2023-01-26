// undefined for Variable

let name

name = "Jane"

if(name === undefined){
    console.log("Please provice a name")
} else {
    console.log(name)
}

// undefined for function arguments
// undefined as function return default value

let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)


// NUll as assigned value
let age = 27

age = null

console.log(age)