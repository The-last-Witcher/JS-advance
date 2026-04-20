const transactions = [
  { id: 1, type: 'in', amount: 1000, category: 'Зарплата' },
  { id: 2, type: 'out', amount: 250, category: 'Продукты' },
  { id: 3, type: 'in', amount: 300, category: 'Фриланс' },
  { id: 4, type: 'out', amount: 1200, category: 'Аренда' },
  { id: 5, type: 'out', amount: 80, category: 'Кофе' }
];

function getTotalBalance(transactions){
    return transactions.reduce((acc, cur) => {
        if(cur.type == 'in') acc += cur.amount
        else if(cur.type == 'out') acc -= cur.amount
        return acc
    }, 0)
}

function getIncomes(transactions){
    return transactions.filter(val => val.type =='in')
}

function getExpenseCategories(transactions){
    return transactions.filter(val => val.type == 'out').map(val => val.category)
}

console.log(getTotalBalance(transactions))
console.log(getIncomes(transactions))
console.log(getExpenseCategories(transactions))

export {getTotalBalance, getIncomes, getExpenseCategories}