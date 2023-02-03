class Book {
  constructor(title, author, numberP, reader) {
    this.title = title;
    this.author = author;
    this.numberP = numberP;
    this.reader = reader;
  }
  print() {
    console.log(`hello ${this.author}`);
  }
}

class Library {
  constructor() {}
  init() {
    this.library = [];
  }
  cacheDOM() {
    this.btn = document.getElementById("btnSubmit");
    this.author = document.getElementById("author");
    this.title = document.getElementById("title");
    this.numberP = document.getElementById("numberP");
    this.reader = document.getElementById("reader");
  }
  bindEvents() {
    this.btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.library.push(
        new Book(
          this.author.value,
          this.title.value,
          this.numberP.value,
          this.reader.checked
        )
      );
      document.getElementById("author").value = "";
      document.getElementById("title").value = "";
      document.getElementById("numberP").value = "";
      document.getElementById("reader").checked = false;
    });
  }

  deleteBook() {}
  render() {}
}

const myLibrary = new Library();
myLibrary.init();
myLibrary.cacheDOM();
myLibrary.bindEvents();

/*
  if (myLibrary.length !== 0) {
    clearTable();
  }
  addBookToLibrary(new Book(author, title, numberP, reader));
  printLibrary();
});*/

/*
let myLibrary = [];
let LibraryTemp = [];
let show = false;

let btnSH = document.querySelector(".newBook");
let form = document.querySelector(".myForm");
btnSH.addEventListener("click", function () {
  if (show === false) {
    form.style.display = "flex";
  } else {
    form.style.display = "none";
  }
  show = !show;
});

function Book(author, title, pagesP, reader) {
  this.title = title;
  this.author = author;
  this.numberP = pagesP;
  this.reader = reader;
}
function addBookToLibrary(book) {
  myLibrary.push(book);
}

let btn = document.querySelector("#btnSubmit");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let author = document.querySelector("#author").value;
  let title = document.querySelector("#title").value;
  let numberP = document.querySelector("#numberP").value;
  let reader = document.querySelector("#reader").checked;
  document.querySelector("#author").value = "";
  document.querySelector("#title").value = "";
  document.querySelector("#numberP").value = "";
  document.querySelector("#reader").checked = false;

  if (myLibrary.length !== 0) {
    clearTable();
  }
  addBookToLibrary(new Book(author, title, numberP, reader));
  printLibrary();
});

function printLibrary() {
  i = 0;
  myLibrary.forEach((element) => {
    let ck = "";
    let row = myTable.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let cell5 = row.insertCell();
    cell1.innerHTML = element.author;
    cell2.innerHTML = element.title;
    cell3.innerHTML = element.numberP;
    i++;
    cell4.innerHTML =
      "<button class='close' onclick='eliminate(" + i + ")' > X </button>";
    if (element.reader == true) {
      ck = "checked";
    }
    cell5.innerHTML =
      "<input type='checkbox' onclick='turn(" + i + ")' " + ck + ">";
  });
}

function turn(x) {
  clearTable();
  myLibrary[x - 1].reader = !myLibrary[x - 1].reader;
  printLibrary();
}

function eliminate(x) {
  clearTable();
  LibraryTemp = [];
  for (let y = 0; y < myLibrary.length; y++) {
    if (y !== x - 1) LibraryTemp.push(myLibrary[y]);
  }
  myLibrary = LibraryTemp;
  printLibrary();
}

let myTable = document.querySelector("#myTable");
function clearTable() {
  for (var i = 0; i < myLibrary.length; i++) {
    myTable.deleteRow(1);
  }
}
*/
