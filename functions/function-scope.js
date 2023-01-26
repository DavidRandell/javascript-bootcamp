// Global Scope (fartocel, tempOne, tempTwo)
    // Local Scope (c, f)
        // isFreezing

// Functions and their scope operate the same way if statements do, creating local scopes bound to Function


let fartocel = function(f){
    let c = (f -32) * 5/9

    if (c <= 0){
        let isFreezing = true
    }

    return c
}

let tempOne = fartocel(32)
let tempTwo = fartocel(68)

console.log(tempOne)
console.log(tempTwo)

// will error as not defined
console.log(isFreezing)