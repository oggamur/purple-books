class Car {

  #brand;
  #model;
  #mileage;

  constructor (brand, model, mileage){
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  info (){
    return `Марка авто: ${this.#brand}, модель авто: ${this.#model}, пробег авто: ${this.#mileage} миль`;
  }

  get mileageInfo (){
    return `Пробег авто: ${this.#mileage} миль`;
  }

  set mileage (mileage){
    this.#mileage = mileage;
  }
}

const bmwZ1 = new Car('BMW', 'Z1', 3000);
console.log(bmwZ1.info());
console.log(bmwZ1.mileageInfo);
bmwZ1.mileage = 5000;
console.log(bmwZ1.mileageInfo);