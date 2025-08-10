class Book{

    private title: string;
    private author: string;

    constructor(title: string,author: string){

        this.title = title;
        this.author = author;
    }   
}

class Library{

    books:Book[];

    constructor(){
        this.books = [];
    }

    push = (newBook:Book) => {
        this.books.push(newBook)
    }

    print = ():void => {

        this.books.forEach(element => {
            console.log(element);
        });
    }
}

const books = new Library();
const book1 = new Book("Sach 1",`Tac gia 1`);
const book2 = new Book("Sach 2",`Tac gia 2`);
const book3 = new Book("Sach 3",`Tac gia 3`);
const book4 = new Book("Sach 4",`Tac gia 4`);
const book5 = new Book("Sach 5",`Tac gia 5`);

books.push(book1)
books.push(book2)
books.push(book3)
books.push(book4)
books.push(book5)

books.print();