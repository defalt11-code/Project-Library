const btn = document.querySelector("button");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const bookStatus = document.querySelector("#status");

// console.log(title);

btn.addEventListener("click", () => {
  addBookToLibrary();
});

const myLibrary = [];

// const book1 = new Book("The hobbit", "J.R.R", 259, "not read yet");
// const book2 = new Book("Success is Decision", "Tim connor", 65, "read");

function Book(title, author, pages, status) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author} ${this.pages} pages, ${this.status}.`;
};

function addBookToLibrary() {
  const titleValue = title.value;
  const authorValue = author.value;
  const pagesValue = pages.value;
  const statusValue = bookStatus.value;
  const book = new Book(titleValue, authorValue, pagesValue, statusValue);
  myLibrary.push(book);
  console.log(myLibrary);
}

// addBookToLibrary(book1);

// console.log(myLibrary);
// console.log(book1.info());
