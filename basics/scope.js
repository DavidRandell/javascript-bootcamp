
// Global Scope - Defined outside of all Code Blocks
// Local Scope - When variables are defined inside Code Blocks

// GLobal Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope - varFour
    // Local Scope (varThree)

// In a Scope you can access variables in that scope and also any Parent/Ancestor Scope


let varOne = 'varOne'

if(true){
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if(true){
        let varFour = 'varFour'
        console.log(varOne, varTwo, varFour)
    }
}

if (true) {
    let varThree
    console.log(varThree) // Undefined as the variable is initialised but no value declared
}

console.log(varTwo) // THis will error as the variable declaration is not in the same scope as the console.log
