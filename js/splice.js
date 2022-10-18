/*Метод splice*/

const cards =[
    'карточка-1',
    'карточка-2',
    'карточка-3',
    'карточка-4',
    'карточка-5',
];
console.table(cards);

/*const cardToRemove = 'карточка-3';
const index = cards.indexOf(cardToRemove);
console.log(index);

console.log(cards.splice(index,1));
console.table(cards);*/

/*Додавання карточки по індексу*/

/*const cardToInsert = 'карточка-6';
const index = 3;
cards.splice(1,0,cardToInsert);
console.table(cards);*/

/*заміна карточки по індексу*/
const cardToUpdate = 'карточка-4';
const index = cards.indexOf(cardToUpdate);
console.log(index);


cards.splice(index,1,'оновлена карточка-4');
console.table(cards);
