'use strict'

/* Абстракция VS Инкапсуляция
  – Название
  - Режиссер
  - Нащ рейтинг
  - Длительность
  - Страна производства
  - Актеры
  - Трейлер 
  ...
*/

/*class Film {
  #name; // Инкапсулирем
  #author; // Инкапсулирем
  rating;
  #length; // Инкапсулирем

  constructor (name, author, length){
    this.#name = name;
    this.#author = author;
    this.#length = length;
  }

  get name (){
    return this.#name;
  }

  get author (){
    return this.#author;
  }

  get length (){
    return this.#length;
  }
}


const avatar = new Film('Avatar', 'Cameron', 240);
console.log(avatar);


const Book = function (title, author){
  this.title = title;
  this.author = author;


};

Book.prototype.buy = function (){
  console.log('Buy');
};

const AudioBook = function (title, author, lenMin){
  Book.call(this, title, author); // привязали констркуктор;
  this.lenMin = lenMin;

};



AudioBook.prototype = Object.create(Book.prototype); // привязали - (пролинковали) prototype;
AudioBook.prototype.constructor = AudioBook; // переназначили конструктор самому себе, чтобы он не тянулся от Book;

AudioBook.prototype.log = function (){
  console.log(`${this.title} - ${this.lenMin}`);
}

const bookAud = new AudioBook('Lord Of The Rings', 'Tolkien', 20 * 60);
bookAud.log();
bookAud.buy();
const book = new Book('Master and Margarita', 'Bulgakov');
book.log(); // в обратку не работает :(
*/

class Book {

  constructor (title, author){
    this.author = author;
    this.title = title;
  }

  buy (){
    console.log('Buy');
  }

  info (){
    console.log(`${this.author} - автор книги`);
  }
}

class AudioBook extends Book {

  constructor (title, author, lenMin){
    super(title, author); // метод который вызывает конструктор исходного класса;
    this.lenMin = lenMin;

  }

  log (){
    console.log(`${this.title} - ${this.lenMin}`);
  }

}

class EBook extends Book {
  constructor (title, author, pages){
    super(title, author);
    this.pages = pages;
  }

  info (){ // перезаписали метод info от Book!
    console.log(`${this.author} - автор книги и в ${this.title} - ${this.pages} страниц`);
  }
}
const audBook1 = new AudioBook('Lord of The Rings', 'Tolkien', 60 * 20);
const eBook1 = new EBook('Hobbit', 'Toliken', 320);
audBook1.info(); // Tolkien - автор книги
audBook1.log();
audBook1.buy();
eBook1.info() // Toliken - автор книги и в Hobbit - 320 страниц


class Enemy {

  constructor (health){
    this.health = health;
  }

  receiveDamage (damage){
    this.health -= damage;
  }

};

class Orc extends Enemy {
  constructor (health){
    super(health);
  }

  receiveDamage (damage){
    if (Math.random() > 0.5){
      console.log(`Orc is not damaged, health: ${this.health}`);
      return;
    } else {
      this.health -= damage;
      console.log(`Orc is damaged, health: ${this.health}`);
    }
  }
}

class Sword {
  #damage;
  constructor (damage){
    this.#damage = damage;
  }

  strike (enemy){
    enemy.receiveDamage(this.#damage);
  }
}

// const orc = new Orc(100);
// const sword = new Sword(20);
// sword.strike(orc);
// console.log(orc.health);
// sword.strike(orc);
// console.log(orc.health);
// sword.strike(orc);
// console.log(orc.health);
// sword.strike(orc);
// console.log(orc.health);
// sword.strike(orc);
// console.log(orc.health);

'Паттерн Builder и Chaining'

const arr = [1,2,3];
arr
.map(el => el * 2)
.filter(el => el < 3)
.find(el => el === 6);


class Wallet {
  balance = 0;

  add(sum){
    this.balance += sum;
    return this;
  }

  remove(sum){
    this.balance -= sum;
    return this;
  } 
}

const wallet = new Wallet();
const res = wallet
          .add(100)
          .remove(10)
          .add(10);
console.log(res);

class Builder {

  house = {};

  addRoof (){
    this.house.roof = 'Roof';
  }

  addFloor (){
    this.house.floor = 'Floor';
  }

  execute (){
    return this.house;
  }
}

const res2 = new Builder()
          .addRoof()
          .addFloor()
          .execute();
console.log(res2);