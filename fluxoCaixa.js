/* ### Sistema de gastos familiar

Criar um objeto que possuirá 2 propriedades, ambas do tipo 
array:
* receitas []
* despesas []

Agora, crie uma função que irá calcular o total de receitas
(menos as) despesas e irá mostrar uma mensagem se a familia está com
saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [4000, 2500, 200, 1500], 
    expenses: [1600, 1060, 140, 300, 130]
}


function sumBalance(array){
    let total = 0;
    return total;

    for(let value of array){
        total += value;
    }

}

function calculateBalance(){
    const calculateIncomes = sumBalance(family.incomes) 
    const calculateExpenses = sumBalance(family.expenses)
    
    const total = calculateIncomes - calculateExpenses;

    const itsOk = total > 0
    
    let messageOk = `Ta tranquilo, tá favorável! Seu saldo é de ${total} R$.`
    let messageNotOk = `Tá na hora de rever os gastos! Seu saldo é de ${total} R$. Vamos fazer seu planejamento mensal.`

    if(itsOk){
        console.log(messageOk)
    } else{
        console.log(messageNotOk)
    }
}

calculateBalance()
