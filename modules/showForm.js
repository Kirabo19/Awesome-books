export default function showForm() {
    const addBookToList = document.getElementById('bk-List');
    const openForm = document.getElementById('add-form');
    const openContact = document.getElementById('open-contact');
    const addNew = document.getElementById('add_books');
    const bookList = document.getElementById('books-list');
    const contact = document.getElementById('contact'); 

  addNew.classList.remove('dontShow');
  bookList.classList.add('dontShow');
  contact.classList.add('dontShow');

  openForm.addEventListener('click', showForm);
}

