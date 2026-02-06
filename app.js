const Book = function (author, title){
  this.author = author;
  this.title = title;
  this.isRead = false;

}

Book.prototype.read = function (){
  this.isRead = true;

};

class BookClass {
    isRead = false;

    constructor(author, title) {
      this.author = author;
      this.title = title;
    }

    read() {
      this.isRead = true;
    }
}

// const BookClass2 = class {}; – можно еще не декларативно обьявить

// const lordOfTheRings = new BookClass('Tolkien', 'Lord Of The Rings');
// console.log(lordOfTheRings.__proto__);
// console.log(lordOfTheRings instanceof BookClass);


const  task = {
  title: 'Task 1',
  dueTo: new Date('2023/01/01'),

  get isOverdue() {  // типичный геттер, обращаемся к нему как к свойству
    return this.dueTo < new Date();
  },

  set isOverdue(isOverdueTask) {

    if (!isOverdueTask) {
      this.dueTo = new Date();
    }

  }

}

// console.log(task.isOverdue)
// task.isOverdue = false;
// console.log(task);


// class Task {

//   constructor(title, dueDate) {
//     this.title = title;
//     this.dueDate = dueDate;
//   }

//   get isOverdue() {
//     return this.dueTo < new Date();
//   }

//   set dueDate(date) {

//     if (date < new Date()){
//       return;
//     }

//     this._dueDate = date;      
//   }

// }

// const newTask = new Task('Task 2', new Date());
// console.log(newTask.isOverdue);
// newTask.dueDate = new Date('2026/04/04')
// console.log(newTask);


Number.MAX_SAFE_INTEGER; //static-свойство
new Number();

Array.from([0, 1, 2]); //static-метод
new Array();


class Test {

  static a = 1; // static позволяет использовать методы и свойства класса без необходимости в создании его instance-ов 
  static hello (){
    console.log('Hello');
  }

  static {
    let b = 5;
    this.a = 5;
  }
}

// Test.hello();

const Test2 = function (){

}

Test2.hello = function (){
  console.log('Hello');
}

// Test2.hello();
// console.log(Test.a)

class Car {
  #test2; // если тут снять комментарий, то ошибка на 123 строке исчезнет
  #vin; // обьявление private-свойства
  speed;

  constructor() {
    this.#test2 = 5; // Private field '#test2' must be declared in an enclosing class. - если не задать свойство ранее
    this.test3 = 5;
    // delete this.#vin; // Uncaught SyntaxError: Private fields can not be deleted
  }

  #changeVin() {
    console.log('Changed')
  }

  test() {
    this.#changeVin(); // так можно использовать private-метод внутри самого класса
  }

  static #field  = 3;

  static {
    this.#field = 5;
  }

}

const car = new Car();

//car.#vin; // Property '#vin' is not accessible outside class 'Car' because it has a private identifier
// car.test(); // так будет работать


// class User {

//   #password;
//   #login;

//   constructor(login, password) {

//     if (!login && !password && login.trim() !== '' && password.trim() !== '') {
//       console.log('Пароль или логин не могут быть пустыми полями');
//     } else {
//       this.#login = login;
//       this.#password = this.#encodePassWord(password);
//     }

//   }

//   #encodePassWord (password){
//     return Array.from(password).reverse().join('');
//   }


//   set changePassword ([oldPassword, newPassword]){
//     if (this.#encodePassWord(oldPassword) === this.#password && newPassword && newPassword.trim() !== '') {
//       this.#password = this.#encodePassWord(newPassword);
//     } else {
//       console.log('Старый пароль не совпадает с введенным или новый пароль равен пустой строке')
//     }
//   } 

//   get login (){
//     console.log(`Ваш логин ${this.#login}`)
//   }


// }

// const user1 = new User('Piskogriz', '123');
// user1.login;
// user1.changePassword = ['123', '1234'];
// user1.changePassword = ['1234', '1256'];

const User = {
    init(email, password) {
      this.email = email;
      this.password = password;
    },

    log() {
      console.log('Log');
    }

}

const User2 = function (email, password){
  this.email = email;
  this.password = password;

}

User2.prototype.getLogin = function() {
  console.log(this.email);
}

const User3 = function (email, password, gender){
  User2.call(this, email, password)
  this.gender = gender;
}

User3.prototype = Object.create(User2.prototype);
User3.prototype.constructor = User3;

const user = Object.create(User); // у этого юзера будет прототип User-класса
console.log(user);
console.log(user.__proto__ == User);
user.init('123@mail.ru', '123');
user.log();

const admin = Object.create(user);
console.log(admin);

const userEmil = new User3('denik', '123@mail.ru', 'Emil');
console.log(userEmil.getLogin());

class Object11 {
  static #name;

  

   static get name() {
    return this.#name;
  }

   static set newName(name) {
    this.#name = name;
  }
  
}

Object11.newName = 'Object';
console.log(Object11.name);
Object11.newName = 'Object2';
console.log(Object11.name);