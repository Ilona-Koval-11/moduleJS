/*Задача 8
     напиши скрипт, який читає суму елементів двох масивів*/

     /*робимо через метод for*/
    /* const array1 = [5, 10, 15, 20];
     const array2 = [10, 20, 30];
     let total = 0;

     for (let i = 0; i < array1.length; i += 1){
      total += array1[i];
     }

      for (let i = 0; i < array2.length; i += 1){
      total += array2[i];
     }
     console.log(total);*/

     /*робимо через метод concat*/
const array1 = [5, 10, 15, 20];
     const array2 = [10, 20, 30];
     let total = 0;
     const numbers = array1.concat(array2);

     /*console.log(numbers);
     console.log(array1);
     console.log(array2);*/

     /*console.table(numbers);*/

     for (const number of numbers){
          total += number;
     }
console.log(total);
