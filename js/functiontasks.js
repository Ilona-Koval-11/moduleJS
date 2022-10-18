/*const add = function (x, y){
console.log(x);
console.log(y);*/
/*const result = x + y;
console.log (result);
    console.log(`виконується функція add`)*/
    /*return x + y;
    }

    const r1 = add(5,3);
    console.log(`r1`, r1);
    console.log (add(2, 3));
    console.log (add(12, 13));*/

    /*стек викликів*/

  /*  const fnA = function(){
        console.log(`Виконується функція А`)
    };
    const fnB = function(){
        console.log(`Виконується функція B`)
    };
    const fnC = function(){
        console.log(`Виконується функція C`)
    };

fnA();
fnB();
fnC();*/

/*Задача 1
Напиши функцію calculate TotalPrice (items), яка приймає масив цін (чисел), повертає їх суму. */

/*const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
const calculateTotalPrice = function (items){
  
    let total = 0;
    for (const value of cart){
    total += value;
}
return total;

}
console.log(calculateTotalPrice([54, 28, 105, 70, 92, 17, 120, 12, 25, 90]));*/


/*const calculateTotalPrice = function (items){
    console.log(`items всередині функції:`, items )
    let total = 0;

    for (const item of items){
        total += item
    }
    return total;
}
console.log(calculateTotalPrice([1, 2, 3]));
console.log(calculateTotalPrice([5, 10, 15, 20]));
console.log(calculateTotalPrice([100, 200, 300]));*/


/*Задача 2
Напиши функцію logItems(items)    для перебору і логування масиву*/


/*const logItems = function (items){
    for (const item of items){
        console.log(item);
    }
}

logItems ([`Mango`, `Kiwi`, `Poly`, `Ajax`]);
logItems([1, 2, 3, 4, 5]);
logItems([`клавіатура`, `навушники`, `годинник`]);*/

/*Задача 3
 Напиши функцію findLogin(allLogins, login)    для пошуку логіну.
 Якщо логіну не має, вивести повідомленняЖ "користува(логін) не знайдено"
 Якщо знайшли логін, вивести повідомлення "користувач(логін) знайдено"*/

 /*const logins = [ 'm4ngoDoge', 'k1w1dab3st', 'poly1scute', 'aj4xth3m4n'];*/

 /*const loginToFind = 'aj4xth3m4n';

 const message = logins.includes(loginToFind)
? `користувача ${loginToFind} знайдено `
:`користувача ${loginToFind} не знайдено`;
console.log(message);*/

/*const findLogin = function (allLogins, loginToFind ){*/
    /*console.log(allLogins);
    console.log(loginToFind);*/
/*let message = `користувача ${loginToFind} не знайдено `;

    for (const login of allLogins ){
       if (login === loginToFind) {
        message = `користувача ${loginToFind} знайдено `;
       } 
    }
    return message;
}

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jamul'));
console.log(findLogin(logins, 'poly1scute'));*/


 /*Розвязання через багато  return */

 /*const logins = [ 'm4ngoDoge', 'k1w1dab3st', 'poly1scute', 'aj4xth3m4n'];
 const findLogin = function (allLogins, loginToFind ){



    for (const login of allLogins ){
       if (login === loginToFind) {
        return `користувача ${loginToFind} знайдено `;
       } 
    }
    return `користувача ${loginToFind} не знайдено `;
}

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jamul'));
console.log(findLogin(logins, 'poly1scute'));*/

/*Найкоротше розвязання через функція*/
/*const logins = [ 'm4ngoDoge', 'k1w1dab3st', 'poly1scute', 'aj4xth3m4n'];
 const findLogin = function (allLogins, loginToFind ){

return allLogins.includes(loginToFind)
? `користувача ${loginToFind} знайдено `
:`користувача ${loginToFind} не знайдено`;
}

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jamul'));
console.log(findLogin(logins, 'poly1scute'));*/

/*Задача 4
Напиши функцію  findSmallestNumber(numbers) для пошуку найменшого числа в масиві,
 за умови, що число унікальне (не повторюється)*/

 /*const numbers = [51, 18, 13, 24, 7,89,19 ];
 let smallestNumber = numbers[0];
 for (const number of numbers){
    if (number < smallestNumber){
        smallestNumber = number;
    }
 }
 console.log ('smallestNumber:', smallestNumber);*/

 /*const findSmallestNumber = function (numbers){
    let smallestNumber = numbers[0];
    for (const number of numbers)
    {
        if(number < smallestNumber)
    {smallestNumber = number
    }
 }
 
    return smallestNumber
 }

 console.log(findSmallestNumber([3, 8, 12, -2, 15]));
 console.log(findSmallestNumber([100, 54, 8, 12, 47]));
 console.log(findSmallestNumber([7, 21, 84, 15, 4]));*/

 /*Задача 5
 Напиши функцію changeCase(string),  яка замінює рестр кожного символу в стрічці на протилежний.
 Наприклад, якщо стрічка Javascript, то на виході повинна бути стрічка jAVAsCRIPT*/

 /*const string = 'qWeRTzxCV';
 const letters =  string.split('');
 let invertedString = '';

 for(const letter of letters){
    const isEqual = letter ===letter.toLowerCase();
invertedString += isEqual
? letter.toUpperCase()
:letter.toLowerCase();
console.log('invertedString:', invertedString );

 }*/

 /*міняємо isEqual на isInLowerCase  */

 /*const changeCase = function (string){
    const letters =  string.split('');
 let invertedString = '';

for(const letter of letters){
    const isInLowerCase = letter ===letter.toLowerCase();

invertedString += isInLowerCase
? letter.toUpperCase()
:letter.toLowerCase();
 }
 return invertedString
}
 
 
console.log(changeCase ('qweRTY'));
console.log(changeCase ('mAnGo'));
console.log(changeCase ('AjAx'));*/


/*Задача 6
 Напиши функцію slygify (string), яка отримує стрічку і повертає URL-slay
 Стрічка складається лише з букв та пробілів*/

 /*const title = 'Top 10 benefits of React framework';

 const normalizedTitle = title.toLowerCase();
 const words = normalizedTitle.split(' ');
 const slug = words.join('-');
 const slug1 = title.toLowerCase().split(' ').join('-');

 console.log(slug1);*/


 /*const slugify = function(string){
    const normalizedTitle = string.toLowerCase();
    const words = normalizedTitle.split(' ');
    const slug = words.join('-');
    return slug;
 };

 console.log(slugify('Top 10 benefits of React framework'));
 console.log(slugify('Argue State Web Apps are Aweresome'));
 console.log(slugify('Technical writing tips for non-native English speachers'));*/

/*найкоротший запис*/

 /*const slugify = function(string){
    return string.toLowerCase().split(' ').join('-');
    
 };

 console.log(slugify('Top 10 benefits of React framework'));
 console.log(slugify('Argue State Web Apps are Aweresome'));
 console.log(slugify('Technical writing tips for non-native English speachers'));*/

 /*Аргументи
 Псевдомасив arguments i Array from i...*/

 /*const fn  = function(){
    console.log(arguments);
    const args = Array.from(arguments);
    console.log(args);
 };

 fn (1, 2 , 3);
 fn (1, 2, 3, 4, 5);
 fn (1, 2, 3, 4, 5, 6, 7);*/

 /*метод ...(rest) =  Array from*/

/*const fn = function(...args){
    console.log(args);
};
fn (1, 2, 3);
fn (1, 2, 3, 4, 5);
fn (1, 2, 3, 4, 5, 6, 7);*/

/*запис, коли ми хочемо через метод ...(rest) не все передати в консолі як масив. Тоді ми цьому даємо порядкові номери
і пишемо його до метод ...(rest) */

/*const fn = function(a, b, c,...args){
    console.log( `${a}, ${b}, ${c}`);
    console.log(args);
};
fn ('hello',  1, 2, 3);
fn ('aloha', 1, 2, 3, 4, 5);
fn ('hi', 1, 2, 3, 4, 5, 6, 7);*/

/*Задача 7
Напиши функцію add для додавання довільної кількості аргументів (чисел)*/

/*const add = function (...args){
    console.log(args);
    let total= 0;
    for( const arg of args){
        total += arg;
    }
    return total;
}
console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));*/

/*Задача 8
 Напиши функцію filterNumbers (array [number1, ...]), яка першим аргументом приймає масив чисел:
 - після першого аргументу може бути довільна кількість інших аргументів, які будуть числами.
 -Функція повинна повернути новий масив, в якому будуть ті аргументи, починаючи з другого,
  для котрих є аналог в оригінальному масиві*/

  /*const filterNumbers = function(array, ...args){
    console.log('array:', array);
    console.log('args:', args);
    const uniqueElements =[];
    for(const element of array){
        if (args.includes(element)){uniqueElements.push(element)
        console.log(`${element} є всюди`)
    }
    }
    return uniqueElements;
  };


  console.log (filterNumbers ([1, 2, 3, 4, 5], 10, 15, 2, 3,8));
  console.log (filterNumbers ([10, 15, 25, 30], 23, 30, 18, 15));
  console.log (filterNumbers ([100, 200, 300, 400, 500], 7, 12, 200, 64));*/

/*ДЗ 2 задача 18/32*/
 /* function calculateTotal(number) {


let total = 0;
  for( let idx = 0; idx <= number; idx += 1)
total += idx;
  return total;


}
 console.log( calculateTotal(18));*/


/*ДЗ 2 задача 21/32*/
 /*function findLongestWord(string) {
 
const strSplit = string.split(' ');
  let longWord = strSplit[0];
  for(let i = 0; i < strSplit.length; i++ ){
    if(strSplit[i].length >  longWord.length){
      longWord = strSplit[i];
    }
  }
    
return longWord;


}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));*/

/*ДЗ 2 задача 22/32*/
/*function createArrayOfNumbers(min, max) {
  const numbers = [];

for (let i = min; i <= max; i += 1){

  numbers.push(i);
}

  return numbers;
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));*/


/*ДЗ 2 задача 23/32*/
/*function filterArray(numbers, value) {
   // Change code below this line

const newArray =[];
  for(let i = 0; i < numbers.length; i++){
    if (numbers[i] > value){
      newArray.push(numbers[i]);
    }
  }
return newArray;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));

console.log(filterArray([1, 2, 3, 4, 5], 4));*/

