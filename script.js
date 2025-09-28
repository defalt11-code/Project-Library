const submit = document.querySelector("#submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const bookStatusInput = document.querySelector("#status");

const bookTable = document.querySelector("table");

submit.addEventListener("click", () => {
  addBookToLibrary();
});

const myLibrary = [];

function displayBooks() {
  const row = document.createElement("tr");
  row.className = "row";
  bookTable.append(row);

  const titleData = document.createElement("td");
  const authorData = document.createElement("td");
  const pagesData = document.createElement("td");
  const bookStatusData = document.createElement("td");
  row.append(titleData, authorData, pagesData, bookStatusData);
  for (let i = 0; i < myLibrary.length; i++) {
    titleData.textContent = myLibrary[i].title;
    authorData.textContent = myLibrary[i].author;
    pagesData.textContent = myLibrary[i].pages;
    bookStatusData.textContent = myLibrary[i].status;
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
