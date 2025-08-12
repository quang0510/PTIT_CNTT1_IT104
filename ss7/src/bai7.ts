class Account {

    accountNumber: number;
    protected balance: number;
    protected history: string[]=[];
    protected status: boolean;

    constructor(accountNumber: number, balance: number , history: string , status: boolean){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status; 
    }

    deposit(amount: number): void {

      this.balance += amount;
      this.history.push(`them tien vao tai khoan: + ${amount}`);

    }

    withDraw(amount: number): void {

        if (this.balance - amount >= 0) {

            this.balance -= amount;
            this.history.push(`rut tien: -${amount}`);

        } else {
            console.log("so tien con lai k du ");
        }

    }

    showHistory(): void {

        console.log(`lich su giao dich:`);

        this.history.forEach(Element=> {
            console.log(Element);      
        })
        
    }
}

class savingAccount extends Account {

    interestrate: number;

   constructor(accountNumber: number, balance: number , status: boolean , interestrate: number){

    super( accountNumber , balance , status);

    this.interestrate = interestrate;
    }
}

const user7 = new savingAccount (1 , 99999  , true , 5 )
user7.deposit(999);
user7.withDraw(555);
user7.showHistory();