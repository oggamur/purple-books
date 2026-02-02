// Базовый класс Персонажа
const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.speak = function () {
  console.log(`${this.name} говорит на ${this.language}`);
};

const Orc = function (race, name, language, weapon) {
  Character.call(this, race, name, language);
  this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.attack = function () {
  console.log(`${this.name} ударяет с помощью ${this.weapon}!`);
};

const Elf = function (race, name, language, spell){
  Character.call(this, race, name, language);
  this.spell = spell;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function (){
  console.log(`Вы создали заклинание ${this.spell}`);
}

const elf = new Elf('Эльф', 'Леголас', 'Эльфийский', 'Огонь');
elf.speak();
elf.createSpell();
const orc = new Orc('Орк', 'Гром', 'Оркский', 'Топор');
orc.speak();
orc.attack();