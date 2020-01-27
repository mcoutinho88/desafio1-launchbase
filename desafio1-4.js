const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}


function createTransaction(transaction) {
    if (transaction.type == 'credit') {
        user.transactions.push(transaction)
        user.balance += transaction.value
    } else {
        user.transactions.push(transaction)
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(transactionType){
    let higherTransaction
    let higherValue = 0 

    for (let transaction of user.transactions){
        if (transaction.type == transactionType){
            if (transaction.value > higherValue){
                higherValue = transaction.value
                higherTransaction = transaction
            }
        }
    }

    return higherTransaction 
    
}


function getAverageTransactionValue() {
    let sum = 0
    let num_transactions = 0

    for (let transaction of user.transactions){

        sum += transaction.value
        num_transactions ++
    }

    let average = sum / num_transactions

    return average
}

function getTransactionsCount(){

    const count = { credit: 0, debit: 0 }

    for(transaction of user.transactions){
        if(transaction.type == 'credit') count.credit++
        if(transaction.type == 'debit') count.debit++
    }

    return count
}


createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue())
console.log(getTransactionsCount())