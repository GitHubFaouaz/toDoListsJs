let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");

// L'événement keyup est un événement JavaScript qui se déclenche lorsqu'une touche du clavier est relâchée  Cet événement est souvent utilisé pour détecter les actions de l'utilisateur liées au clavier, telles que la saisie de texte.
inputBx.addEventListener("keyup", function (event) {
  console.log("event", event);
  //  La fonction de rappel commence par vérifier si la touche qui a été relâchée est la touche "Enter" (touche Entrée) en utilisant event.key
  if (event.key == "Enter") {
    addItem(this.value); //Si la touche "Enter" est pressée, la fonction addItem(this.value) est appelée
    this.value = ""; // Après avoir ajouté l'élément à la liste, la valeur du champ de texte est réinitialisée à une chaîne vide (this.value = "")
  }
});

let addItem = (inputBx) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${inputBx}<i></i>`;

  // lors du click sur un element li
  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  // listItem.querySelector("i").addEventListener("click", function () {
  //   listItem.remove();
  // });

  list.appendChild(listItem);
};
