const submit = document.querySelector("#submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const bookStatusInput = document.querySelector("#status");

const bookTable = document.querySelector(".book-table");
// const titleHTML = document.querySelector("#titleDisplay");
// const authorHTML = document.querySelector("#authorDisplay");
// const pagesHTML = document.querySelector("#pagesDisplay");
// const bookStatusHTML = document.querySelector("#statusDisplay");

// console.log(title);

submit.addEventListener("click", () => {
  addBookToLibrary();
});

const myLibrary = [];

// const book1 = new Book("The hobbit", "J.R.R", 259, "not read yet");
// const book2 = new Book("Success is Decision", "Tim connor", 65, "read");

function displayBooks() {
  const row = document.createElement("div");
  bookTable.append(row);

  const titleData = document.createElement("div");
  const authorData = document.createElement("div");
  const pagesData = document.createElement("div");
  const bookStatusDisplayData = document.createElement("div");
  row.append(titleData, authorData, pagesData, bookStatusDisplayData);
  // row.append(titleHTML, authorHTML, pagesHTML, bookStatusHTML);
  for (let i = 0; i < myLibrary.length; i++) {
    titleData.textContent = myLibrary[i].title;

    authorData.textContent = myLibrary[i].author;

    pagesData.textContent = myLibrary[i].pages;

    bookStatusDisplayData.textContent = myLibrary[i].status;
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

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
}

// addBookToLibrary(book1);

// console.log(myLibrary);
// console.log(book1.info());
