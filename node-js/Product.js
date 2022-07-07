const AnotherClass = require("./AnotherClass");

class Product {

    constructor(name, price, description, anotherClass) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.anotherClass = anotherClass
    }

    get getName() {
        return this.name
    }
    get getPrice() {
        return this.price
    }
    get getDescription() {
        return this.description
    }

    set setName(name){
        return this.name = name
    }
    set setPrice(price){
        return this.price = price
    }
    set setDescription(description){
        return this.description = description
    }

    toString = () => {
        console.log(this.name + ' ' + this.price + ' ' + this.description)
    }

}

const lemonade = new Product("Lemonade", .25, "Ice Cold Lemonade");


class Animal {

    constructor(age, species){
        this.age = age;
        this.species = species;
    }

    speak = () => {
        console.log("Animal Noise");
    }
}

class Dog extends Animal{

    constructor(age, species, size){
        super(age, species);
        this.size = size;
    }

    speak = () => {
        console.log("WOOOF");
    }

    toString() {
        console.log("Age: " + this.age + ", species: " + this.species + ", Size: " + this.size)
    }
}

class Cat extends Animal {
    speak = () => {
        console.log('Meow');
    }
}

const doggo = new Dog(10, "pitbull", "medium");
doggo.name = "good boy";

const doge = new Dog();
doge.name = "bad girl"

const kitty = new Cat();

console.log(doggo.toString());


const product = new Product()
const anotherClass = new AnotherClass()

product.anotherClass = anotherClass

module.exports = Product
