/*Задача 7\41
ДОБАВЛЕНИЕ СВОЙСТВ
Добавь объекту apartment несколько новых свойств:

area - площадь в квадратных метрах, число 60;
rooms - количество комнат, число 3;
location - местоположение квартиры, обьект со следующими вложенными свойствами;
country - страна, строка "Jamaica";
city - город, строка "Kingston".

Розв'язання
*/
/*const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};


apartment.area  = 60;
apartment.rooms = 3;
apartment.location ={
  country: "Jamaica",
  city: "Kingston",
};*/

/*Задача 8/41
КОРОТКИЕ СВОЙСТВА
Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями
 из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.
 Розвя"язання
 */
/*const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  name,
  price,
  image,
  tags,
  // Change code above this line
};*/

/*Задача 9/41
ВЫЧИСЛЯЕМЫЕ СВОЙСТВА
Дополни код объявления объекта credentials так,
 чтобы в результате у него были два свойства: email и password, имена которых хранятся
  в переменных emailInputName и passwordInputName.

Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением
 свойства password - строка "jqueryismyjam".
  Розвя"язання
 */
/*const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
[emailInputName]: "henry.carter@aptmail.com",
[passwordInputName]: "jqueryismyjam",  


  // Change code above this line
};*/

/*Задача 10/41
ЦИКЛ FOR...IN
Перебери объект apartment используя 
цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
  Розвя"язання*/
/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for(const key in apartment){
  keys.push(key);
   values.push(apartment[key]);
}*/

/*Задача 11/41
HASOWNPROPERTY()
Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
Розвя"язання*/
/*const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if(apartment.hasOwnProperty(key) ){
   keys.push(key);
  values.push(apartment[key]);
}
 
  
 

  // Change code above this line
}
*/

/*Задача 12\41
ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ
Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object.
 Используй переменную propCount для хранения количества свойств объекта.
 Розвя"язання*/
 /*function countProps(object) {
  let propCount = 0;
  // Change code below this line
 
for(const key in object) {
 
  if(object.hasOwnProperty(key)){
  
    
  propCount +=1;
  }
}
  // Change code above this line
  return propCount;
}*/

/*Задача 13\41
МЕТОДOBJECT.KEYS()
Перебери об'єкт apartmentвикористовуючи метод Object.keys()та цикл for...of. Запиши в змінну keysмасив ключів
 своїх властивостей об'єкта apartment, і додай до масиву valuesвсі значення його властивостей.
 Розвя"язання*/
 /*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for( const key  of keys){
 values.push(apartment[key]); 
}
console.log(keys);
  console.log(apartment[values])*/

  /*Задача 14\41
  ЗАВДАННЯ. ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0
  Виконай рефакторинг функції , countProps(object)використовуючи метод Object.keys()
   і, можливо, але необов'язково, цикл for...of.
   Розв"язання*/

/*function countProps(object) {
  // Change code below this line
  let propCount = 0;

  const keys = Object.keys(object);
  for (const key of keys) {
     {
      propCount += 1;
    }
  }

  return propCount;
  // Change code above this line
}*/

/*Задача 15\41
МЕТОДOBJECT.VALUES()
Запиши в змінну keysмасив ключів своїх властивостей об'єкта apartment, а змінну valuesмасив всіх значень його властивостей. Використовуй методи Object.keys()та Object.values().
Розв"язання
*/
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);*/

/*Задача 16\41
ЗАВДАННЯ. ВИТРАТИ НА ЗАРПЛАТУ
Напиши функцію countTotalSalary(salaries)яка приймає об'єкт зарплат, де ім'я якості це ім'я співробітника, а значення якості це зарплата. Функція має розрахувати загальну суму зарплат співробітників та повернути її. Використовуй змінну
 totalSalaryдля зберігання загальної суми заробітної плати.
 Розв"язання*/

/*function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const values = Object.values(salaries);
  for(const value of values){
    totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}*/

/*Задача 17\41
МАССИВ ОБЪЕКТОВ
Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex,
 а в массив  rgbColors значения свойств rgb из всех объектов массива colors.
 Розв"язання*/

/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for(const color of colors){
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}*/

/*Задача 18\41
ЗАДАЧА. ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА
Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
 Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает
 его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
 Розв"язання*/

 /*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
for(product of products){
  if(product.name === productName ){
    return product.price;
  }
  
}

return null;
  // Change code above this line
}*/

/*Задача 19\41
ЗАДАЧА. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА
Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - 
имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким
 именем из каждого объекта в массиве products. Если в объектах нет свойства с таким
  именем, функция должна вернуть пустой массив.
  Розв"язання*/
/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
const values = [];
  for(let product of products){
    if(product[propName])
    {values.push(product[propName])}
  }
  
  
return values;
  // Change code above this line
}*/

/*Задача 20\41
ЗАДАЧА. ОБЩАЯ СТОИМОСТЬ ТОВАРА
Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. 
Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
Розв"язання*/

/*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let totalPrice = 0;
  for(const product of products){
    if(product.name === productName){
      totalPrice = product.price * product.quantity;
    }
      
  }

return totalPrice;
  // Пиши код выше этой строки
}*/

/*Задача 21\41
ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня
 (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией
  деструктуризации свойств объекта highTemperatures.
  Розв"язання*/

  /*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday, today, tomorrow } = highTemperatures;


// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;*/

/*Задача 22\41
ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ
В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды.
 Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации 
 свойств объекта highTemperatures. Задай значение по умолчанию для
  icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
  Розв"язання*/
 /* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;*/

/*Задача 23\41
ИЗМЕНЕНИЕ ИМЕНИ ПЕРЕМЕННОЙ
Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией
 деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon
  - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
  Розв"язання*/
  /*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;*/

/*Задача 24\41
ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ
Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта.
Розв"язання*/
/*const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}*/

/*Задача 25\41
ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ
Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами,
 а также необязательными иконками. Замени объявления всех переменных одной операцией
  деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок,
   переменных todayIcon и tomorrowIcon
    - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
    Розв"язання*/

 /*const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const{today:{low: lowToday, high: highToday, icon: todayIcon
      = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" },
       tomorrow:{low: lowTomorrow, high: highTomorrow, 
        icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"  },} = forecast;*/

/*Задача 26\41
ПАТТЕРН «ОБЪЕКТ НАСТРОЕК»
Функция calculateMeanTemperature(forecast) принимает один параметр forecast 
- объект температур на два дня следующего формата.
{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh
 одной операцией деструктуризации свойств объекта forecast.
Розв"язання*/

/*function calculateMeanTemperature(forecast) {
const{today:{low: todayLow, high: todayHigh }, tomorrow:{low: tomorrowLow, high: tomorrowHigh}}  = forecast;
  
  

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}*/

/*Задача 27\41
ОПЕРАЦИЯ SPREAD ПРИ ПЕРЕДАЧЕ АРГУМЕНТОВ
В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max()
 и Math.min()  дополни код так, чтобы в переменной bestScore был самый высокий балл, 
 а в worstScore самый низкий.
 Розв"язання*/

 /*const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);*/

/*Задача 28\41
ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО МАССИВА
В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты
 тестирования отдельных групп. Используя распыление дополни код так, чтобы:

В переменной allScores хранился массив всех результатов от первой до третьей группы.
В переменной bestScore был самый высокий общий балл.
В переменной worstScore был самый низкий общий балл.
Розв"язання*/

/*const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);*/

/*Задача 29\41
ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО ОБЪЕКТА
В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые
 хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно
  переопределить, они хранятся в переменной overrideSettings.

Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию
 и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной
  finalSettings получился объект финальных настроек теста.
  Розв"язання*/
  /*const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};*/

/*Задача 30\41
ЗАДАЧА. КАРТОЧКИ ЗАДАЧ
Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. 
В новом объекте должно быть свойство completed, значение которого хранится в одноимённой
 локальной переменной.

В параметре data гарантированно будет только свойство text, а остальные два, category
 и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category
  и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.*/

  /*function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  
return {category: "General", priority: "Normal", completed: false, ...data};
  // Change code above this line
}*/

/*Задача 31\41
ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ
Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов,
 считала и возвращала их сумму.
 */

/*function add(...args) {
let argNumber = 0;
  for(const arg of args){
   argNumber += arg 
  }
  return argNumber;
  // Change code above this line
}*/

/*Задача 32\41
ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ
Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции
 addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем
  заданное число. Это число должно быть первым параметром функции.*/

  // Change code below this line
/*function addOverNum(firstNumber,...args) {
  let total = 0;

  for (const arg of args) {
   if (arg > firstNumber){
     total += arg;
   }
    
  }

  return total;
  // Change code above this line
}*/

/*Задача 33\41
ЗАДАЧА. МАССИВ СОВПАДЕНИЙ
Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет
 массив чисел, а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы,
 начиная со второго, которые есть в массиве первого аргумента.

Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2],
 потому что только они есть в массиве первого аргумента.*/

 /*function findMatches(array, ...args) {
  const matches = []; // Don't change this line
for(const arg of args){
  if(array.includes(arg)){
    matches.push(arg);
  }
}
  // Change code above this line
  return matches;
}*/

/*Задача 34\41
МЕТОДЫ ОБЪЕКТА
Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии
 с getBooks() и addBook(bookName).

Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>",
 где <имя книги> это значение параметра bookName.

Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку
 "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров
  oldName и newName соотвественно.*/

  /*const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName){
return `Deleting book ${bookName}`;
  },
 updateBook(oldName, newName) {
  return `Updating book ${oldName} to ${newName}`;
 } 
  // Change code above this line
};*/

/*Задача 35\41
ДОСТУП К СВОЙСТВАМ ОБЪЕКТА В ЕГО МЕТОДАХ
Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с
 oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива,
  и splice() для того чтобы заменить этот элемент*/

  /*const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
let bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName)


    // Change code above this line
  },
};*/

/*Задача 36\41
ЗАДАЧА. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»
К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря
 - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions,
  значением которого сделай пустой массив.*/

  /*const atTheOldToad = {
  // Change code below this line


 

  // Change code above this line
};
atTheOldToad.potions = [];*/

/*Задача 37\41
ЗАДАЧА. ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ
Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.*/

/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
getPotions(){
  return this.potions;
}
  // Change code above this line
};
*/

/*Задача 38\41
ЗАДАЧА: ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ
Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива
 зелий в свойстве potions.*/

 /*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line


this.potions.push(potionName);
    // Change code above this line
  },
};
*/

/*Задача 39\41
ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ
Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий
 в свойстве potions.*/

 /*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line

 const potionsIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionsIndex, 1);
    // Change code above this line
  },
};
*/

/*Задача 40\41
ЗАДАЧА: ОБНОВЛЯЕМ ЗЕЛЬЕ
Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName,
 в массиве зелий в свойстве potions.*/

 /*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
let potionsIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionsIndex, 1, newName)


    // Change code above this line
  },
};
*/

/*Задача 41\41
ЗАДАЧА: РАСШИРЯЕМ ИНВЕНТАРЬ
Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть
 и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими
  свойствами.
  {
  name: "Dragon breath",
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк,
 а с массивом объектов.*/


 potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for(const potion of this.potions){
     if (potion.name === newPotion.name){
        return `Error! Potion ${newPotion} is already in your inventory!`;
     } 
    }
     this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    for(const potion of this.potions){
      if(potion.name === oldName){
        potion.name = newName;
      }
    }

          return `Potion ${oldName} is not in inventory!`;
    
  },
  // Change code above this line
};


