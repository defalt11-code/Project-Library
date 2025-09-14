const submit = document.querySelector("#submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const bookStatusInput = document.querySelector("#status");

// console.log(title);

submit.addEventListener("click", () => {
  addBookToLibrary();
});

const myLibrary = [];

// const book1 = new Book("The hobbit", "J.R.R", 259, "not read yet");
// const book2 = new Book("Success is Decision", "Tim connor", 65, "read");

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let titleHTML = myLibrary.map((item) => item.title);
    let authorHTML = myLibrary.map((item) => item.author);
  }
}

function Book(title, author, pages, status) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  const pagesValue = pagesInput.value;
  const statusValue = bookStatusInput.value;
  const book = new Book(titleValue, authorValue, pagesValue, statusValue);
  myLibrary.push(book);
  console.log(myLibrary);
  displayBooks();
}

// addBookToLibrary(book1);

// console.log(myLibrary);
// console.log(book1.info());
