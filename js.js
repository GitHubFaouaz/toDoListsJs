let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");

let existingItems = JSON.parse(localStorage.getItem("Todos")) || [];

existingItems.forEach((todo) => {
  addItem(todo);
});

// L'événement keyup est un événement JavaScript qui se déclenche lorsqu'une touche du clavier est relâchée  Cet événement est souvent utilisé pour détecter les actions de l'utilisateur liées au clavier, telles que la saisie de texte.
inputBx.addEventListener("keyup", function (event) {
  console.log("event", event);
  //  La fonction de rappel commence par vérifier si la touche qui a été relâchée est la touche "Enter" (touche Entrée) en utilisant event.key
  if (event.key == "Enter") {
    addItem(this.value); //Si la touche "Enter" est pressée, la fonction addItem(this.value) est appelée
    // saveLocalStorage(this.value);
    this.value = ""; // Après avoir ajouté l'élément à la liste, la valeur du champ de texte est réinitialisée à une chaîne vide (this.value = "")
  }
});

function addItem(todo) {
  let item = document.createElement("li");
  item.innerHTML = `${todo}<i></i>`;

  item.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  item.querySelector("i").addEventListener("click", function () {
    item.remove();
  });

  addLocalStorage(todo);
  // if (existingItems.includes(todo)) {
  //   console.log("deja ajouté dans la listeitem");
  // } else {
  list.appendChild(item);
  // }
}

function addLocalStorage(text) {
  if (existingItems.includes(text)) {
    console.log(text, "deja ajouté dans la liste");
  } else {
    existingItems.push(text);
    localStorage.setItem("Todos", JSON.stringify(existingItems));
  }
}
// function addLocalStorage(text) {
//   existingItems.push(text);
//   localStorage.setItem("Todos", JSON.stringify(existingItems));
// }
