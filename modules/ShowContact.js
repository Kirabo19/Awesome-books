const showContact = () => {
  const openContact = document.getElementById('open-contact');
  const addNew = document.getElementById('add_books');
  const bookList = document.getElementById('books-list');
  const contact = document.getElementById('contact');

  contact.classList.remove('dontShow');
  bookList.classList.add('dontShow');
  addNew.classList.add('dontShow');

  openContact.addEventListener('click', showContact);
};
export default showContact();
