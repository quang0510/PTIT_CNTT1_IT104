"use strict";
class Account {
    constructor(accountNumber, balance, history, status) {
        this.history = [];
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(`them tien vao tai khoan: + ${amount}`);
    }
    withDraw(amount) {
        if (this.balance - amount >= 0) {
            this.balance -= amount;
            this.history.push(`rut tien: -${amount}`);
        }
        else {
            console.log("so tien con lai k du ");
        }
    }
    showHistory() {
        console.log(`lich su giao dich:`);
        this.history.forEach(Element => {
            console.log(Element);
        });
    }
}
class savingAccount extends Account {
    constructor(accountNumber, balance, status, interestrate) {
        super(accountNumber, balance, status);
        this.interestrate = interestrate;
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, balance, status, overdraftLimit) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    withDraw(amount) {
        if (this.balance + this.overdraftLimit >= amount) {
            this.balance -= amount;
            this.history.push(`ru tien : -${amount}, so du : ${this.balance}`);
        }
        else {
            console.log("so tien vuot qua so du va han muc chi ");
        }
    }
}
const checkingAccount = new CheckingAccount(1, 10000, true, 5000);
checkingAccount.deposit(2000);
checkingAccount.withDraw(12000);
checkingAccount.showHistory();
// const user7 = new savingAccount (1 , 99999  , true , 5 )
// user7.deposit(999);
// user7.withDraw(555);
// user7.showHistory();
