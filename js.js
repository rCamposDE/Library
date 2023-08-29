// the form, corregido con el AddEventListener con el EventPrevent
// the modal https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

// the class call itself

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
    this.form = document.getElementById("my-form");
    this.author = document.getElementById("author");
    this.title = document.getElementById("title");
    this.numberP = document.getElementById("numberP");
    this.reader = document.getElementById("reader");
    this.formDialog = document.getElementById("formDialog");
  }
  bindEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.formDialog.close();

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
      
    });

    this.btnNB.addEventListener("click", () => {
      this.formDialog.showModal();
    });
  }

  render() {
    const myCards = document.getElementById("myCards");
    document.getElementById("myCards").textContent = "";

    this.library.forEach((X) => {
      const card = document.createElement("div");
      card.className = "card";
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

/*       authorD.style.width = "10rem";
      titleD.style.width = "10rem";
      numberPD.style.width = "5rem"; */

      card.appendChild(authorD);
      card.appendChild(titleD);
      card.appendChild(numberPD);
      card.appendChild(checkbox);
      card.appendChild(close);
      myCards.appendChild(card);
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


