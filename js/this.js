/*Task 1/20
Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к
свойствам и методам объекта.

How to do*/

/*const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};*/

/*Task 2/20
Перед звільненням розробник зламав вихідний код керування обліковими записами користувачів нашого
 сервісу доставки їжі.  Виконай рефакторинг методів об'єкта customer, розставивши відсутні this
 при зверненні до властивостей об'єкта.

Після оголошення об'єкта ми додали виклики методів у тій послідовності, у якій твій код
 перевірятимуть тести. Будь ласка, нічого там не змінюй.
 
 How to do*/

 /*const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
*/

/*Task 3/20
Тестувальники знайшли баги у коді сервісу зберігання історії замовлень їжі. Тобі необхідно виправити їх,
 правильно розставивши thisв методах об'єкта historyService, щоб методи почали працювати правильно.
 
 How to do*/

 /*const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};
*/

/*Task 4/20
Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

How to do*/

/*const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = "Jason";
child.age = 27;*/

/*Task 5/20
Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent,
 а тот в свою очередь был прототипом для child.

 How to do
*/

/*const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

// Change code above this line
*/

/*Task 6/20
ОБЪЯВЛЕНИЕ КЛАССА
Используя ключевое слово class объяви класс Car с пустым телом.
How to do*/

/*class Car {
  
}*/

/*Task 7/20
КОНСТРУКТОР КЛАССА
Добавь классу Car метод constructor который принимает три параметра:

brand - марка автомобиля.
model - модель автомобиля.
price - цена автомобиля.
Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых
должны быть переданные аргументы во время её вызова с оператором new.

How to do
*/

/*class Car {
  // Change code below this line
constructor(brand, model, price ) {
this.brand = brand;
this.model = model;
this.price = price;
}
  


  // Change code above this line
}
*/

/*Task 8/20
ОБЪЕКТ ПАРАМЕТРОВ
Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand,
 model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.

How to do */

/*class Car {
  // Change code below this line
  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}
*/

/*Task 9/20
МЕТОДЫ КЛАССА
Добавь классу Car два метода.

getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

How to do*/

/*class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
getPrice(){
  return this.price;
}

changePrice(newPrice){
  this.price = newPrice;
}  


  // Change code above this line
}*/

/*Task 10/20
ЗАДАЧА: СКЛАД
Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает
 только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

Объяви следующие методы класса:

getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items
 объекта который вызывает этот метод.
removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве
 items объекта который вызывает этот метод.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
 в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
 
 How to do*/

 /*class Storage {
  constructor( items ) {
    this.items = items;
   }
getItems(){
  return this.items
}

addItem(newItem){
  this.items.push(newItem)
}  

  removeItem(itemToRemove){
  const removeIndex=this.items.indexOf(itemToRemove)
    if (removeIndex !== -1){
      this.items.splice(removeIndex,1) 
    }
  
}  
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
*/

/*Task 11\20
ЗАДАЧА: КОНСТРУКТОР СТРОК
Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку,
которая записывается на создаваемый объект в свойство value.

Объяви следующие методы класса:

getValue() - возвращает текущее значение свойства value.
padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта
 который вызывает этот метод.
padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта
 который вызывает этот метод.
padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value
 объекта который вызывает этот метод.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в
 которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
*/

/*class StringBuilder{
  constructor(value){
    this.value = value;
  }
  getValue() {
  return this.value;
}
 padEnd(str) {
  this.value = this.value += str;
}  
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
  
}


// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
*/

/*Task 12/20
ПРИВАТНЫЕ СВОЙСТВА
Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для
публичного интерфейса, для чтения и изменения этого свойства.

getBrand() - возвращает значение приватного свойства brand.
changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

How to do*/

/*class Car {
  // Change code below this line
#brand;
  
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
 getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }


  // Change code above this line
}
*/

/*Task13/20
ЗАДАЧА: СКЛАД 2.0
Выполни рефакторинг класса Storage, сделав свойство items приватным.

Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут
 проверять тесты. Пожалуйста ничего там не меняй.
 
 How to do*/

 /*class Storage {
  // Change code below this line
#items;
  
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
*/

/*Task 14/20
ЗАДАЧА: КОНСТРУКТОР СТРОК 2.0
Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.

Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
 в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
 
 How to do*/

 /*class StringBuilder {
  // Change code below this line
#value;
  
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
*/

/*Task 15/20
ГЕТТЕРЫ И СЕТТЕРЫ
Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand.
 Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры
  brand, model и price для взаимодействия с приватными свойствами.
  
  How to do*/

  /*class Car {
  // Change code below this line
  #brand;
  #model;
  #price;
  

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}
*/

/*Task 16/20
Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000
 - максимально допустимая цена автомобиля.

Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем
 MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.
 
 How to do*/

 /*class Car {
  // Change code below this line
  static  MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
   if(newPrice > Car.MAX_PRICE){
     return
   } else{
     this.#price = newPrice;
   }
    
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
*/

/*Task 17/20
Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля.
 Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds
 the maximum".
В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать
 как будет использоваться метод checkPrice(price).
 
 How to do*/

 /*class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
static checkPrice(price){
  if(price > Car.#MAX_PRICE){
     return "Error! Price exceeds the maximum";
  }else{ return      "Success! Price is within acceptable limits" }
}
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
*/

/*class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
static checkPrice(price){
  if(price > Car.#MAX_PRICE){
     return "Error! Price exceeds the maximum";
  }else{ return      "Success! Price is within acceptable limits" }
}
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
*/

/*Task 18/20
НАСЛЕДОВАНИЕ КЛАССОВ
В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

Объяви класс Admin, который наследует от класса User
Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение
 которого это объект { BASIC: "basic", SUPERUSER: "superuser" }

How to do */

/*class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line
class Admin extends User{
  static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" }
}*/

/*Task 19/20
КОНСТРУКТОР ДОЧЕРНЕГО КЛАССА
Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя
 свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение
  которого будет передаваться при вызове конструктора.

Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под
 объявлением класса.
 
 How to do*/

 /*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line
constructor({ email, accessLevel }) {
    // Вызов конструктора родительского класса User
    super(email);
    this.accessLevel = accessLevel;
  }
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"
*/

/*Task 20/20
МЕТОДЫ ДОЧЕРНЕГО КЛАССА
Добавь классу Admin следующие свойства и методы.

Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей.
 Значение по умолчанию это пустой массив.
Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять
 значение параметра email в массив хранящийся в свойстве blacklistedEmails.
Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять
 наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать
  true или false.
После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
 в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
 
 How to do*/

 /*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    
  }
  blacklistedEmails = [];
  blacklist(email){
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email){
    return this.blacklistedEmails.includes(email);
  }
  

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
*/