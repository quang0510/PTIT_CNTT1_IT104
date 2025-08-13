"use strict";
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookById(id) {
        return this.books.find((book) => book.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
    updateBook(id, newBook) {
        const index = this.books.findIndex((book) => book.id === id);
        if (index !== -1) {
            this.books[index] = Object.assign(Object.assign({}, newBook), { id }); // Clone lại đối tượng
        }
    }
    listBooks() {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm) {
        return this.books.filter((book) => {
            var _a, _b;
            return ((_a = book.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(searchTerm.toLocaleLowerCase())) ||
                ((_b = book.author) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
        });
    }
    getTotalBooks() {
        return this.books.length;
    }
    findBooksByYear(year) {
        return this.books.filter((book) => book.year === year);
    }
}
class EBook extends Book {
    constructor(id, title, author, year, fileSize) {
        super(id, title, author, year);
        this.fileSize = fileSize;
    }
}
// Test code:
const library = new Library();
const book1 = new Book(1, "Sách 1", "Nguyễn Văn A", 2020);
const book2 = new Book(2, "Sách 2", "Nguyễn Văn B", 2020);
const book3 = new Book(3, "Sách 3", "Nguyễn Văn C", 2025);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
// 1. Thêm một vài sách vào thư viện.
console.log("Danh sách các cuốn sách có trong thư viện: ", library.listBooks());
// 2. Tìm kiếm sách theo ID.
console.log("Cuốn sách có id = 1: ", library.getBookById(1));
// 3. Cập nhật thông tin sách.
const updateBookDto = {
    title: "Sách 4",
    author: "Lê Văn A",
    year: 2000,
};
library.updateBook(2, updateBookDto);
console.log("Cuốn sách có id = 2 sau khi cập nhật ", library.getBookById(2));
// 4. Xóa sách khỏi thư viện.
library.removeBook(1);
console.log("Danh sách sách sau khi xóa cuốn sách có id = 1: ", library.listBooks());
// 5. Tìm kiếm sách theo tên hoặc tác giả.
const foundBooks = library.findBooksByTitleOrAuthor("Nguyễn Văn B");
console.log("Sách tìm theo tên hoặc tác giả: ", foundBooks);
// 6. Đếm tổng số sách trong thư viện.
console.log("Tổng số sách trong thư viện: ", library.getTotalBooks());
// 7. Tìm sách theo năm xuất bản.
const booksFrom2020 = library.findBooksByYear(2020);
console.log("Sách xuất bản năm 2020: ", booksFrom2020);
// 8. Tạo lớp EBook kế thừa từ Book.
const ebook1 = new EBook(4, "EBook 1", "Nguyễn Văn D", 2023, 5);
library.addBook(ebook1);
console.log("Danh sách sách có trong thư viện sau khi thêm EBook: ", library.listBooks());
