const Contact = require('./contact.js');


class Address{

    constructor(streetAddress, city, state){
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
    }

    get getStreetAddress(){return this.streetAddress;}
    set setStreetAddress(streetAddress){return this.streetAddress = streetAddress;}

    get getCity(){return this.city;}
    set setCity(city){return this.city = city;}

    get getState(){return this.state;}
    set setState(state){return this.state = state;}

    toString(){
        return `${this.streetAddress}, ${this.city} ${this.state};`
    }  

}

module.exports = Address