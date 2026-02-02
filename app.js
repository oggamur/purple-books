const Character = function (rase, name, language){
  this.rase = rase
  this.name = name
  this.language = language

}

Character.prototype.talk = function (){
  return `Говорит на ${this.language}, а зовут его ${this.name}`
} 
const ork = new Character('ork', 'Grog', 'Orcish');
ork.hasWeapon = true;
ork.shoot = function(){
  return `${this.name} ударил вас`
}

const elf = new Character('elf', 'Ditore', 'Elvish');
elf.spellTypes = ['защита', 'нападение'];
elf.spells = ['safarius', 'chromius', 'firefoxius']

elf.createSpell = function(spell){
  this.spells.push(spell);
  return `Вы добавили заклинание ${spell}, теперь в вашем распоряжении заклинания: ${this.spells.join(', ')}`
}

console.log(ork.talk());
console.log(ork.shoot());
console.log(elf.talk());
console.log(elf.createSpell('spyrus'));