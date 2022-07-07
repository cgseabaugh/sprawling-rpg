

class Contact {

    constructor(id, firstName, lastName, phoneNumber, address){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    get getId(){return this.id;}
    set setId(id){return this.id = id;}

    get getFirstName(){return this.firstName;}
    set setFirstName(firstName){return this.firstName = firstName;}

    get getLastName(){return this.lastName;}
    set setLastName(lastName){return this.lastName = lastName;}

    get getPhoneNumber(){return this.phoneNumber;}
    set setPhoneNumber(phoneNumber){return this.phoneNumber = phoneNumber;}

    get getAddress(){return this.address;}
    set setAddress(address){return this.address = address;}

    toString(){
        return `${this.firstName} ${this.lastName}, ${this.phoneNumber};`
    }    


}



module.exports = Contact