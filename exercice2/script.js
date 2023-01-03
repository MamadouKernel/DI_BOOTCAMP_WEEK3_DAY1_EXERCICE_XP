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