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