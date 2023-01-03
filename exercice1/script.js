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
  listItems.forEach(item => {
    if (item.textContent === 'Pete') {
      item.textContent = 'Richard';
    }
  });



  // Remplacez chaque prénom dans les deux <ul> par votre nom
  let ulitems = document.querySelectorAll('ul')
  const newName = 'Konate';
  ulitems.forEach(item => {
    item.firstElementChild.textContent = newName;
  });



  // Supprimez le <li> qui contient le nœud de texte "Sarah"
  // const listItems = document.querySelectorAll('.list li');
  listItems.forEach(item => {
    if (item.textContent === 'Sarah') {
      item.remove();
    }
  });
  

  // Bonus : Ajoutez une classe appelée student_list aux deux <ul>
  const lists = document.querySelectorAll('.list');
  lists.forEach(list => {
    list.classList.add('student_list'); 
  });


  // Bonus : Ajoutez les classes university et attendance au premier <ul>
  const firstList = document.querySelector('.list');
  firstList.classList.add('university', 'attendance');
