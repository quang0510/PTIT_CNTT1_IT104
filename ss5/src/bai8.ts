class Book {

    private title: string;
    private author: string;
    private id: number;

    constructor(title: string, author: string, id: number) {
        this.title = title;
        this.author = author;
        this.id = id;
    }

    getId = () => {
        return this.id;
    }

    getTitle = () => {
        return this.title;
    }

    getAuthor = () => {
        return this.author;
    }
}

class Library {
    books: Book[];

    constructor() {
        this.books = [];
    }

    push = (newBook: Book) => {
        this.books.push(newBook);
    }

    searchBook = (searchTitle: string) => {
        
        const foundBooks = this.books.filter((book) => {
            return book.getTitle().includes(searchTitle);
        });

        if (foundBooks.length === 0) {
            console.log(`Khong tim thay sach voi ten : "${searchTitle}".`);
            return;
        }

        console.log(`Sach ten : "${searchTitle}":`);
        
        foundBooks.forEach((book) => {

            console.log(`ID: ${book.getId()}`);
            console.log(`Title: ${book.getTitle()}`);
            console.log(`Author: ${book.getAuthor()}`);
        });
    }
}

const books = new Library();
const book1 = new Book("Sach 1", "Tac gia 1", 1);
const book2 = new Book("Sach 2", "Tac gia 2", 2);
const book3 = new Book("Sach 3", "Tac gia 3", 3);
const book4 = new Book("Sach 4", "Tac gia 4", 4);
const book5 = new Book("Sach 5", "Tac gia 5", 5);

books.push(book1);
books.push(book2);
books.push(book3);
books.push(book4);
books.push(book5);

books.searchBook("5");
