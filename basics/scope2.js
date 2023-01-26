
//Global
    //Local
        //Local
    //Local

let myName = 'David'

if(true){
    let myName = 'Mike'

    if(true){
        // This will create a new Global variable, called a Leaked variable - To fix this you should DECLARE the variable on this line using let myName = 'Jen'
        myName = 'Jen'
        console.log(myName)
    }
}

if(true){
    console.log(myName)
}

console.log(myName)