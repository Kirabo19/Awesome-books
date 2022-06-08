import Book from './app.js';

// const book = new Book(title, author);

const addBooks = () => {
  const form = document.querySelector('#books-form');

  form.addEventListener('submit', () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    const book = new Book(title, author, id);

    Book.addBooksToList(book);
    // Book.addBooks(book);

    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    form.reset();
  });
};
export default addBooks;
