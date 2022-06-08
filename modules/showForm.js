const showForm = () => {
  const openForm = document.getElementById('add-form');
  const addNew = document.getElementById('add_books');
  const bookList = document.getElementById('books-list');
  const contact = document.getElementById('contact');

  addNew.classList.remove('dontShow');
  bookList.classList.add('dontShow');
  contact.classList.add('dontShow');

  openForm.addEventListener('click', showForm);
};
export default showForm;
