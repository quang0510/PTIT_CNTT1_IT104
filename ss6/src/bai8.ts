class Book{

    constructor(private id: number,public title: string,public author: string,public stock: number,public status: boolean){

    };

    getId = () => {return this.id};

}

class Member{
    constructor(private id: number,name: string,private contact: string,private books: Book[],private status: boolean){

    };
}

class LendedBook{

    constructor(private memberId: number,private bookId: number,private dueDate: Date){

    }
}

class Library{
    constructor(public books: Book[] = [],private members: Member[] = []){}

    addBook = (newBook: Book): void => {
        
        if(newBook){
            this.books.push(newBook)
        } 
    }

    showBooks = (): void => {

        this.books.forEach(element => {

            console.log(`Title : ${element.title}`);
            console.log(`Author : ${element.author} `);
            console.log(` Stock : ${element.stock}`);
            console.log(`Status : ${element.status ? `Available` : `Unavailable`}`);
            
        })
    }
}

const library = new Library();

library.addBook(new Book(1, "sach 1", "Nguyen Van A", 5, true));
library.addBook(new Book(2, "sach 2", "Nguyen Van B", 3, true));
library.addBook(new Book(3, "sach 3", "Nguyen Van C", 4, true));

library.showBooks();