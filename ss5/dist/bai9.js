"use strict";
class Book {
    constructor(title, author, id) {
        this.getId = () => {
            return this.id;
        };
        this.getTitle = () => {
            return this.title;
        };
        this.getAuthor = () => {
            return this.author;
        };
        this.setTitle = (newTitle) => {
            this.title = newTitle;
        };
        this.setAuthor = (newAuthor) => {
            this.author = newAuthor;
        };
        this.title = title;
        this.author = author;
        this.id = id;
    }
}
class Library {
    constructor() {
        this.push = (newBook) => {
            this.books.push(newBook);
        };
        this.print = () => {
            this.books.forEach(element => {
                console.log(`ID : ${element.getId()}`);
                console.log(`Title : ${element.getTitle()}`);
                console.log(`Author : ${element.getAuthor()}`);
            });
        };
        this.searchBook = (searchTitle) => {
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
        };
        this.deleteBook = (id) => {
            const bookIndex = this.books.findIndex((element) => element.getId() === id);
            if (bookIndex === -1) {
                return;
            }
            this.books.splice(bookIndex, 1);
        };
        this.updateBook = (id, newTitle, newAuthor) => {
            const book = this.books.find((element) => element.getId() === id);
            if (!book) {
                return;
            }
            book.setAuthor(newAuthor);
            book.setTitle(newTitle);
            this.print();
        };
        this.books = [];
    }
}
const books = new Library();
const book1 = new Book("Sach 1", `Tac gia 1`, 1);
const book2 = new Book("Sach 2", `Tac gia 2`, 2);
const book3 = new Book("Sach 3", `Tac gia 3`, 3);
const book4 = new Book("Sach 4", `Tac gia 4`, 4);
const book5 = new Book("Sach 5", `Tac gia 5`, 5);
books.push(book1);
books.push(book2);
books.push(book3);
books.push(book4);
books.push(book5);
books.deleteBook(3);
books.updateBook(5, "Sach 10", "Tac gia 10");
