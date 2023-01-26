let add = function(a, b){
    return a+b
}

let result = add(10,1)
//console.log(result)


// default arguments

let getScoreText = function (name = "Anonymous", score = 0) {
    return `Name: ${name} - Score: ${score}`
}

// Use Undefined to invoke the default value for the first argument
console.log(getScoreText(undefined,100))
console.log(getScoreText("Dave"))

// Challenge - Tip Calculator
// total, tipPercent

let calculateTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on €${total} would be €${tip}`
}

let tip = calculateTip(15,.50)
console.log(tip)

let name = 'Jane'
console.log(`Hello, my name is ${name}!`)