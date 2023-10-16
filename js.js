let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");
let error = document.querySelector("#error");

let existingItems = JSON.parse(localStorage.getItem("Todos")) || [];

existingItems.forEach((todo) => {
  listLocalStorage(todo);
});

// L'événement keyup est un événement JavaScript qui se déclenche lorsqu'une touche du clavier est relâchée  Cet événement est souvent utilisé pour détecter les actions de l'utilisateur liées au clavier, telles que la saisie de texte.
inputBx.addEventListener("keyup", function (event) {
  console.log("event", event);
  //  La fonction de rappel commence par vérifier si la touche qui a été relâchée est la touche "Enter" (touche Entrée) en utilisant event.key
  if (event.key == "Enter") {
    addItemInput(this.value); //Si la touche "Enter" est pressée, la fonction addItem(this.value) est appelée
    // saveLocalStorage(this.value);
    this.value = ""; // Après avoir ajouté l'élément à la liste, la valeur du champ de texte est réinitialisée à une chaîne vide (this.value = "")
  }
});

function addItemInput(todo) {
  if (existingItems.includes(todo)) {
    let errorPhrase = `${todo} est déjà dans la list`;
    error.innerHTML = errorPhrase;
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
  } else {
    addLocalStorage(todo, existingItems);
    addItem(todo);
  }
}

function addLocalStorage(todo, listTodo) {
  listTodo.push(todo);
  localStorage.setItem("Todos", JSON.stringify(listTodo));
}

function removeItemFromLocalStorage(text, listTodo) {
  let index = listTodo.indexOf(text);
  if (index > -1) {
    listTodo.splice(index, 1);
    localStorage.setItem("Todos", JSON.stringify(listTodo));
  }
}

function listLocalStorage(todo) {
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
