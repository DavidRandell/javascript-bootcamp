let myAccount = {
    name: 'David Randell',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount){
    account.expenses = account.expenses + amount
}


// Challenge 
// addIncome
let addIncome = function(account, amount){
    account.income = account.income + amount
}
// resetAccount
let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

// getAccountSummary
// Account for David has €900, €1000 in income and €100 in expenses

let getAccountSummary = function(account){
    let accountBalance = account.income - account.expenses
    return `${account.name} has a balance of €${accountBalance}. €${account.income} in income and €${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)

console.log(getAccountSummary(myAccount))

addExpense(myAccount, 3.59)
addExpense(myAccount, 90)

console.log(getAccountSummary(myAccount))


