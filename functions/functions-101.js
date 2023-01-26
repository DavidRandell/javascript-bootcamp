// Function - input, code, output (return value)

let greetUser = function() {
    console.log("Welcome User")
}

greetUser()
greetUser()
greetUser()

let square = function(num){
    let result = num * num
    return result
}

console.log(square(10))

let fartocel = function(f){
    let c = (f - 32) * 5/9
    return c
}

console.log(fartocel(32))
console.log(fartocel(68))