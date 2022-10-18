/*Задачі від лектора лекція від 29.082022*/

/*Задача 1
Базові операції з масивом
1.Створіть масив genres з елекментами "jazz", i "bluez".
2.Додайте "rok-n-roll" в кінець.
3.Виведіть в консоль перший елемент масиву.
4.Виведіть в консоль останній елекмент масиву.
5.Код повинен працювати для масиву будь-якої долвжини.

Видаліть перши елемент. 
Виведіть його в консоль.
Вставте "contry" i "reggy"        в початок масиву.*/



/*1. Створіть масив genres з елекментами "jazz", i "bluez".*/
/*const genres =['jazz',  'bluez'];*/

/*2.Додайте "rok-n-roll" в кінець.*/
/*genres.push('rok-n-roll');
console.log(genres);*/

/*3.Виведіть в консоль перший елемент масиву.*/
/*console.log(genres[0]);*/

/*4.Виведіть в консоль останній елекмент масиву.*/
/*console.log(genres[2]);
або*/
/*console.log(genres[genres.length-1]);*/ /*при такому коді спрацьовує умова 5 задачі*/

/*5.Видаліть перши елемент. 
Виведіть його в консоль.*/
/*let firstElement = genres.shift();
console.log(firstElement);
console.log(genres);*/

/*Вставте "contry" i "reggy" в початок масиву*/
 /*genres.splice(0,0, 'contry', 'reggy' );
 console.log(genres);*/

 /*Задача 2
 Напиши скрипт для вирахування площі прямокуиника зі сторонами значення котрих
  зберігається в перемнній values  у вигляді строки. Значення гарантовано розділені пробілом
  const values= 8,11*/

 /*const values = "8 11";*/

  /*робимо з цього масив*/
  /*const nums = values.split(" ");
  console.log(nums);*/

   /*вираховуємо площу*/
   /*const result = Number(nums[0]) * Number(nums[1]);
   console.log(result);*/

   /*розвязання через цикл*/

   /*const values = "8 11";
   const nums = values.split(" ");
   let numbersArr = [];

   for (const item of nums){
numbersArr.push(Number(item));
   }

   console.log(numbersArr);

   const res = numbersArr[0] * numbersArr[1];
   console.log(res);*/

   /*Задача 3
   Перебір масиву
   Напиши скрипт для перебору масиву fruits  циклом for. Для кожного елекменту масиву введи в консоль стрічку в форматі 
   номер_елекмента, значення.елемента.
   Нумерація елементів повинна починатися з 1. */

   /*Перебір масиву*/
   const fruits = ['apple', 'blueberry', 'peach', 'banana', 'lemon'];

   /*for ( let i = 0; i < fruits.length; i += 1){
    console.log(fruits[i]);
   }*/

   /*Напиши скрипт для перебору масиву fruits  циклом for. Для кожного елекменту масиву введи в консоль стрічку в форматі 
   номер_елекмента, значення.елемента.
   Нумерація елементів повинна починатися з 1.*/

for ( let i = 0; i < fruits.length; i += 1){
    console.log(`номер_елемента:${i + 1}: значення_елемента ${fruits[i]}`);
   }