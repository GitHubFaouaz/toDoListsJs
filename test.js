let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");

let existingItems = JSON.parse(localStorage.getItem("Todos")) || [];
existingItems.forEach((todo) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${todo}<i></i>`;
  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  list.appendChild(listItem);
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

let addItem = (inputBx) => {
  // Récupérer les éléments existants du localStorage

  // Ajouter le nouvel élément au tableau existant
  existingItems.push(inputBx);

  // Enregistrer le tableau mis à jour dans le localStorage
  localStorage.setItem("Todos", JSON.stringify(existingItems));

  let listItem = document.createElement("li");
  listItem.innerHTML = `${inputBx}<i></i>`;

  // localStorage.setItem("item", JSON.stringify(inputBx));

  // lors du click sur un element li
  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  list.appendChild(listItem);
};
