class Book {
  id?: number;
  title?: string;
  author?: string;
  year?: number;

  constructor(id: number, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Library<T> {
  private books: T[] = [];

  addBook(book: T): void {
    this.books.push(book);
  }

  getBookById(id: number): T | undefined {
    return this.books.find((book: T) => (book as Book).id === id);
  }

  removeBook(id: number): void {
    this.books = this.books.filter((book: T) => (book as Book).id !== id);
  }

  updateBook(id: number | string, newBook: T): void {
    const index = this.books.findIndex((book: T) => (book as Book).id === id);

    if (index !== -1) {
      this.books[index] = { ...newBook, id }; // Clone lại đối tượng
    }
  }

  listBooks(): T[] {
    return this.books;
  }

  findBooksByTitleOrAuthor(searchTerm: string): T[] {
    return this.books.filter(
      (book: T) =>
        (book as Book).title
          ?.toLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        (book as Book).author
          ?.toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
    );
  }

  getTotalBooks(): number {
    return this.books.length;
  }

  findBooksByYear(year: number): T[] {
    return this.books.filter((book: T) => (book as Book).year === year);
  }
}

class EBook extends Book {
  fileSize: number;

  constructor(
    id: number,
    title: string,
    author: string,
    year: number,
    fileSize: number
  ) {
    super(id, title, author, year);
    this.fileSize = fileSize;
  }
}

// Test code:

const library = new Library<Book>();

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
const updateBookDto: Omit<Book, "id"> = {
  title: "Sách 4",
  author: "Lê Văn A",
  year: 2000,
};

library.updateBook(2, updateBookDto);
console.log("Cuốn sách có id = 2 sau khi cập nhật ", library.getBookById(2));

// 4. Xóa sách khỏi thư viện.
library.removeBook(1);
console.log(
  "Danh sách sách sau khi xóa cuốn sách có id = 1: ",
  library.listBooks()
);

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
console.log(
  "Danh sách sách có trong thư viện sau khi thêm EBook: ",
  library.listBooks()
);