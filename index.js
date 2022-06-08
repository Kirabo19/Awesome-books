import { addBooks } from './modules/addBook.js';

import { showForm } from './modules/showForm.js';

import { showBook } from './modules/bookList.js';

import { showContact } from './modules/ShowContact.js';

import { DateTime } from './modules/luxon.js';

addBooks();

showContact();

showForm();

showBook();

const now = DateTime.now();
const time = document.querySelector('#date-time');
time.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);
