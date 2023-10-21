let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");
let error = document.querySelector("#error");

let existingItems = JSON.parse(localStorage.getItem("Todos")) || [];

existingItems.forEach((todo) => {
  contentLocalStorage(todo);
});

// L'événement keyup est un événement JavaScript qui se déclenche lorsqu'une touche du clavier est relâchée  Cet événement est souvent utilisé pour détecter les actions de l'utilisateur liées au clavier, telles que la saisie de texte.
inputBx.addEventListener("keyup", function (event) {
  // console.log("event", event);
  if (event.key == "Enter") {
    addItemInput(this.value);
    this.value = "";
  }
});

function addItemInput(todo) {
  if (existingItems.includes(todo)) {
    let errorPhrase = `${todo} est déjà dans la liste`;
    error.innerHTML = errorPhrase;
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
  } else {
    addLocalStorage(todo, existingItems);
    addItem(todo);
  }
}

function addLocalStorage(todo, listTodos) {
  listTodos.push(todo);
  localStorage.setItem("Todos", JSON.stringify(listTodos));
}

function removeItemFromLocalStorage(text, listTodos) {
  let index = listTodos.indexOf(text);
  if (index > -1) {
    listTodos.splice(index, 1);
    localStorage.setItem("Todos", JSON.stringify(listTodos));
  }
}

function contentLocalStorage(todo) {
  addItem(todo);
}

function addItem(todo) {
  let item = document.createElement("li");
  item.innerHTML = `${todo}<i></i>`;

  item.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  item.querySelector("i").addEventListener("click", function () {
    item.remove();
    removeItemFromLocalStorage(todo, existingItems);
  });

  list.appendChild(item);
}
