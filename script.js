// SAMPLE BOOK WHEN PAGE LOAD AT START
const bookOne = new Book("Success is a decision", "Tim connor", 69, "Read");
// SAMPLE BOOK WHEN PAGE LOAD AT START

const submit = document.querySelector("#submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const bookStatusInput = document.querySelector("#status");

const addBooksBtn = document.querySelector(".add-books");
const formContainer = document.querySelector(".form-container");
const overlay = document.querySelector("#overlay");

overlay.addEventListener("click", () => {
  overlay.classList.toggle("active");
  formContainer.classList.toggle("active");

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
});

addBooksBtn.addEventListener("click", () => {
  overlay.classList.toggle("active");
  formContainer.classList.toggle("active");

  // console.log("working...");
});

const bookTable = document.querySelector("table");

submit.addEventListener("click", () => {
  overlay.classList.toggle("active");
  formContainer.classList.toggle("active");
  addBookToLibrary();
  // console.log("working...");
});

const myLibrary = [];

//SAMPLE BOOK WHEN PAGE LOAD!!
myLibrary.push(bookOne);
displayBooks();
//SAMPLE BOOK WHEN PAGE LOAD!!

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
    toggleReadBtn.className = "toggleBtn";
    toggleReadBtn.textContent = book.status;
    status.append(toggleReadBtn);

    toggleReadBtn.addEventListener("click", () => {
      book.toggleStatus();
    });

    const trashImg = document.createElement("img");
    trashImg.src = "trash-bin.png";
    trashImg.alt = "trash bin";
    trashImg.className = "trash-bin";

    const removeBtnTD = document.createElement("td");

    const removeBookBtn = document.createElement("button");
    removeBookBtn.className = "remove-button";
    removeBookBtn.append(trashImg);
    removeBtnTD.append(removeBookBtn);

    removeBookBtn.addEventListener("click", () => {
      book.removeBook();
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

Book.prototype.toggleStatus = function () {
  this.status = this.status === "Read" ? "Not read" : "Read";
  displayBooks();
};

Book.prototype.removeBook = function () {
  const index = myLibrary.findIndex((b) => b.id === this.id);
  myLibrary.splice(index, 1);
  displayBooks();
};

function addBookToLibrary() {
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  const pagesValue = pagesInput.value;
  const statusValue = bookStatusInput.value;
  const book = new Book(titleValue, authorValue, pagesValue, statusValue);

  // REMINDS THE USER TO FILL OUT ALL THE FIELDS!!
  if (!titleInput || !authorValue || !pagesValue) {
    alert("Please fill out all the inputs before submitting!");
    return;
  }

  myLibrary.push(book);
  console.log(myLibrary);
  event.preventDefault();
  displayBooks();

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
}
