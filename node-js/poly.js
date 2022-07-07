// Lemonade Water Soda


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

class Product {

    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    get getName(){
        return this.name;
    }
    get getPrice(){
        return this.price;
    }
    get getDescription(){
        return this.description;
    }

    set setName(name){
        return this.name = name;
    }
    set setPrice(price){
        return this.price = price;
    }
    set setDescription(description){
        return this.description = description;
    }

    toString = () => {
        console.log(`${this.name} ${this.price} ${this.description}`)
    }
}

const lemonade = new Product("Lemonade", .50, "Ice Cold Lemonade");
const soda = new Product("Soda", 1, "Fizzy Pop");
const water = new Product("Water", .25, "It's room temperature, sorry");

console.log("Can I get you a drink? Here's our menu.");
console.log("1. Lemonade");
console.log("2. Soda");
console.log("3. Water");
readline.question("What would you like to order?: ", async (answer) => {
    switch(answer) {
        case '1':
            console.log(lemonade.description + "! That will be $" + lemonade.getPrice + " please!")
            break;
        case '2':
            console.log(soda.description + "! That will be $" + soda.getPrice + " please!")
            break;
        case '3':
            console.log(water.description + "! That will be $" + water.getPrice + " please!")
            break;
    }
})
