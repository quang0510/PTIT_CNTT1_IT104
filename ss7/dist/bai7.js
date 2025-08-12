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
const user7 = new savingAccount(1, 99999, true, 5);
user7.deposit(999);
user7.withDraw(555);
user7.showHistory();
