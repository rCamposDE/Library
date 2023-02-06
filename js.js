// the form, don´t send data incomplete
// the class call itself
// put more format with tailwind

class Book {
  constructor(title, author, numberP, reader) {
    this.title = title;
    this.author = author;
    this.numberP = numberP;
    this.reader = reader;
  }
}

class Library {
  constructor() {}
  init() {
    this.library = [
      new Book("cañitas", "carlos t", 120, true),
      new Book("Don quijote", "MSS", 2, false),
    ];
    this.showForm = false;
  }
  cacheDOM() {
    this.btnNB = document.getElementById("newBook");
    this.btn = document.getElementById("btnSubmit");
    this.author = document.getElementById("author");
    this.title = document.getElementById("title");
    this.numberP = document.getElementById("numberP");
    this.reader = document.getElementById("reader");
  }
  bindEvents() {
    this.btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        //This does n´t work as it expect
        this.author.value.length > 3 &&
        this.title.value.length > 3 &&
        this.numberP.value > 0
      ) {
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
        this.render();
      }
    });

    this.btnNB.addEventListener("click", () => {
      if (this.showForm === false) {
        document.getElementById("hideShow").style.display = "flex";
        this.showForm = true;
      } else {
        document.getElementById("hideShow").style.display = "none";
        this.showForm = false;
      }
    });
  }

  render() {
    document.getElementById("myCards").textContent = "";

    const contain = document.createElement("div");
    contain.id = "formContainer";

    this.library.forEach((X) => {
      const card = document.createElement("div");
      card.className = "myForm";
      const authorD = document.createElement("p");
      const titleD = document.createElement("p");
      const numberPD = document.createElement("p");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const close = document.createElement("div");
      close.textContent = "X";
      close.className = "close";

      authorD.textContent = X.author;
      titleD.textContent = X.title;
      numberPD.textContent = X.numberP;
      checkbox.checked = X.reader;

      authorD.style.width = "10rem";
      titleD.style.width = "10rem";
      numberPD.style.width = "5rem";

      card.appendChild(authorD);
      card.appendChild(titleD);
      card.appendChild(numberPD);
      card.appendChild(checkbox);
      card.appendChild(close);
      contain.appendChild(card);
      myCards.appendChild(contain);
      close.addEventListener("click", () => {
        //this is to delete
        this.deleteBook(X.title);
        this.render();
      });
      checkbox.addEventListener("click", () => {
        //this is to switch
        X.reader = !X.reader;
      });
    });
  }

  deleteBook(authorToDelete) {
    this.library = this.library.filter((book) => book.title !== authorToDelete);
  }
}

const myLibrary = new Library();
myLibrary.init();
myLibrary.cacheDOM();
myLibrary.bindEvents();
myLibrary.render();
