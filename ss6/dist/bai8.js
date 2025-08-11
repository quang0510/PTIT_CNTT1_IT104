"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
        this.getId = () => { return this.id; };
    }
    ;
}
class Member {
    constructor(id, name, contact, books, status) {
        this.id = id;
        this.contact = contact;
        this.books = books;
        this.status = status;
    }
    ;
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor(books = [], members = []) {
        this.books = books;
        this.members = members;
        this.addBook = (newBook) => {
            if (newBook) {
                this.books.push(newBook);
            }
        };
        this.showBooks = () => {
            this.books.forEach(element => {
                console.log(`Title : ${element.title}`);
                console.log(`Author : ${element.author} `);
                console.log(` Stock : ${element.stock}`);
                console.log(`Status : ${element.status ? `Available` : `Unavailable`}`);
            });
        };
    }
}
const library = new Library();
library.addBook(new Book(1, "sach 1", "Nguyen Van A", 5, true));
library.addBook(new Book(2, "sach 2", "Nguyen Van B", 3, true));
library.addBook(new Book(3, "sach 3", "Nguyen Van C", 4, true));
library.showBooks();
