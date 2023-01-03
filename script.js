/**
 * @author: Konate Mamadou K
 * @date_heure: 03/01/2023
 * Exercice XP
 * @week: Week3
 * @day: day1
 */

  /** Exercice 1 */


  // Récupérez le div et console.log it
  const container = document.querySelector('#container');
  console.log(container);

  // Changez le nom "Pete" en "Richard"
  const listItems = document.querySelectorAll('.list li');
  listItems.forEach((li) => {
    if (li.textContent === 'Pete') {
      li.textContent = 'Richard';
    }
  });

  // Remplacez chaque prénom dans les deux <ul> par votre nom
  const yourName = 'Your Name';

  
  listItems.forEach((li) => {
    li.textContent = yourName;
  });

  // Supprimez le <li> qui contient le nœud de texte "Sarah"
  listItems.forEach((li) => {
    if (li.textContent === 'Sarah') {
      li.remove();
    }
  });

  // Bonus : Ajoutez une classe appelée student_list aux deux <ul>
  const listElements = document.querySelectorAll('.list');
  listElements.forEach((list) => {
    list.classList.add('student_list');
  });

  // Bonus : Ajoutez les classes university et attendance au premier <ul>
  const firstList = document.querySelector('.list');
  firstList.classList.add('university', 'attendance');

/** Exercice 2 */


// sélectionner la div
const div = document.querySelector('div');

// ajouter une couleur d'arrière-plan "bleu clair" et un peu de rembourrage à la div
div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';

// cacher le premier élément li
const firstLi = document.querySelector('li');
firstLi.style.display = 'none';

// ajouter une bordure au second élément li
const secondLi = document.querySelectorAll('li')[1];
secondLi.style.border = '1px solid black';

// modifier la taille de la police de tout le corps
document.body.style.fontSize = '20px';

// bonus : afficher une alerte si la couleur de fond de la div est "bleu clair"
if (div.style.backgroundColor === 'lightblue') {
  alert(`Bonjour ${firstLi.textContent} et ${secondLi.textContent}`);
}


/** Exercice 3 */

// sélectionner la div
const div = document.querySelector('#navBar');

// modifier l'attribut id de la div
div.setAttribute('id', 'socialNetworkNavigation');

// créer un nouvel élément li
const newLi = document.createElement('li');

// créer un nouveau nœud de texte avec "Déconnexion" comme texte spécifié
const newTextNode = document.createTextNode('Déconnexion');

// ajouter le nœud de texte au nœud de liste nouvellement créé
newLi.appendChild(newTextNode);

// ajouter ce nœud de liste mis à jour à la liste non ordonnée
const ul = document.querySelector('ul');
ul.appendChild(newLi);

// prime : afficher le texte des premier et dernier éléments li de la liste
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
console.log(firstLi.textContent); // affiche "Profile"
console.log(lastLi.textContent); // affiche "Déconnexion"


/** Exercice 4 */


// créer le tableau de livres
const allBooks = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    image: 'https://i.imgur.com/gGcYXvT.jpg',
    alreadyRead: true
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    image: 'https://i.imgur.com/1v0nYAS.jpg',
    alreadyRead: false
  }
];

// sélectionner le div
const div = document.querySelector('.listBooks');

// parcourir le tableau de livres et générer du HTML pour chaque livre
allBooks.forEach((book) => {
  // créer le HTML pour chaque livre
  const bookHTML = `
    <div class="book">
      <h2>${book.title}</h2>
      <p>Written by ${book.author}</p>
      <img src="${book.image}" width="100" />
      <p>${book.alreadyRead ? 'Already read' : 'Not read yet'}</p>
    </div>
  `;

  // ajouter le HTML généré au div
  div.innerHTML += bookHTML;
});

// sélectionner tous les éléments p du div
const pElements = div.querySelectorAll('p');

// mettre en surbrillance en rouge tous les éléments p qui indiquent que le livre a déjà été lu
pElements.forEach((p) => {
  if (p.textContent === 'Already read') {
    p.style.color = 'red';
  }
});


/** Exercice 5 */