const submit = document.querySelector("#submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const bookStatusInput = document.querySelector("#status");

const addBooksBtn = document.querySelector(".add-books");
const formContainer = document.querySelector(".form-container");
const overlay = document.querySelector("#overlay");

addBooksBtn.addEventListener("click", () => {
  overlay.classList.toggle("active");
  formContainer.classList.toggle("active");

  console.log("working...");
});

const bookTable = document.querySelector("table");

submit.addEventListener("click", () => {
  overlay.classList.toggle("active");
  formContainer.classList.toggle("active");
  addBookToLibrary();
  console.log("working...");
});

const myLibrary = [];

function displayBooks() {
  const rows = bookTable.querySelectorAll("tr.row");
  rows.forEach((row) => row.remove());

  myLibrary.forEach((book) => {
    const row = document.createElement("tr");
    row.className = "row";

    const title = document.createElement("td");
    title.textContent = book.title;

    const author = document.createElement("td");
    author.textContent = book.author;

    const pages = document.createElement("td");
    pages.textContent = book.pages;

    const status = document.createElement("td");

    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.textContent = book.status;
    status.append(toggleReadBtn);

    toggleReadBtn.addEventListener("click", () => {
      book.status = book.status === "read" ? "not read" : "read";
      displayBooks();
    });

    const removeBtnTD = document.createElement("td");

    const removeBookBtn = document.createElement("button");
    removeBookBtn.textContent = "Remove";

    removeBtnTD.append(removeBookBtn);

    removeBookBtn.addEventListener("click", () => {
      const index = myLibrary.findIndex((b) => b.id === book.id);
      myLibrary.splice(index, 1);
      displayBooks();
    });

    row.append(title, author, pages, status, removeBtnTD);
    bookTable.append(row);
  });
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
