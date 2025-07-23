class Bank{

    balance=undefined

    constructor(balance){
        this.balance = balance
    }

    getBalance(){

        return this.balance
    }

}

var icici = new Bank(1000)
console.log(`balacnce = ${icici.getBalance()}`)