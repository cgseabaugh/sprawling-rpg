const LookUp = require('./lookup.js');
const AddContact = require('./addcontact.js');
const Contact = require('./contact.js');
const Address = require('./address.js');
const UtilFunctions = require('./UtilFunctions.js');

const phoneBook = [];
let counter = 0

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const displays = (type) => {
    if(type === 0){
        return "####################################################################################################"
    }else if(type === 1){
        return "##=================================================================================================="
    }else if(type === 2){
        return "##--------------------------------------------------------------------------------------------------"
    }
}

const deleteContact = (contact) => {
    console.log(displays(1))
    console.log("##");
    readline.question(`##     Are you sure you want to delete ${contact.firstName} ${contact.lastName} from the Phone Book? [Y/N] : `, (selection) => {
        if(selection === 'Y' || selection === 'y'){
            // phoneBook.map((item) => {
            //     if(item === contact){
            //         phoneBook.splice(i, 1)
            //         console.log(phoneBook);
            //     }
            // })
            for(let i = 0; i < phoneBook.length; i++){
                if(phoneBook[i] === contact){
                    phoneBook.splice(i, 1)
                    console.log("##");
                    console.log(`##     ${contact.firstName} ${contact.lastName} was removed from the Phone Book.`);
                    console.log("##");
                    phonebook();
                }
            }
        }
    })
}

const editContact = (contact) => {
    console.log(displays(0));
    console.log("##     ")
    console.log(`##     [1] - ${contact.firstName}          [2] - ${contact.lastName}`);
    console.log("##     ")
    console.log(`##     [3] - ${contact.phoneNumber}`);
    console.log("##     ")
    console.log(`##     [4] - ${contact.address.streetAddress}          [5] - ${contact.address.city}          [6] - ${contact.address.state}`);
    console.log("##     ")
    console.log(`##     [0] - Go Back`)
    console.log("##     ");
    console.log(displays(2))
    console.log("##     ");
    readline.question("##     What would you like to edit? : ", (selection) => {
        if(selection !== "1" && selection !== "2" && selection !== "3" && selection !== "4" && selection !== "5" && selection !== "6" && selection !== "0"){
            console.log("##     Please select a valid option.");
            editContact(contact);
        }else{
            if(selection === "0"){
                displayContact(contact);
            }else if(selection === "1"){
                console.log("##     ")
                console.log(displays(2));
                console.log("##     ");
                readline.question("##     Please enter a new First Name (0 to go Back): ", (selection) => {
                    if(selection === "0"){
                        editContact(contact);
                    }else{
                        console.log("##     ")
                        readline.question(`##     Change First Name: ${contact.firstName} to ${selection}? (Y/N) : `, (selectionB) => {
                            if(selectionB === "Y"){
                                contact.firstName = selection;
                                console.log("##     ")
                                console.log(`##     First Name changed to ${selection}`);
                                editContact(contact);
                            }else{
                                editContact(contact);
                            }
                        })
                    }
                })
            }else if(selection === "2"){
                console.log("##     ")
                console.log(displays(2));
                console.log("##     ");
                readline.question("##     Please enter a new Last Name (0 to go Back): ", (selection) => {
                    if(selection === "0"){
                        editContact(contact);
                    }else{
                        console.log("##     ")
                        readline.question(`##     Change Last Name: ${contact.lastName} to ${selection}? (Y/N) : `, (selectionB) => {
                            if(selectionB === "Y"){
                                contact.lastName = selection;
                                console.log("##     ")
                                console.log(`##     Last Name changed to ${selection}`);
                                editContact(contact);
                            }else{
                                editContact(contact);
                            }
                        })
                    }
                })
            }else if(selection === "3"){
                console.log("##     ")
                console.log(displays(2));
                console.log("##     ");
                readline.question("##     Please enter a new Phone Number (0 to go Back): ", (selection) => {
                    if(selection === "0"){
                        editContact(contact);
                    }else{
                        console.log("##     ")
                        readline.question(`##     Change Phone Number: ${contact.phoneNumber} to ${selection}? (Y/N) : `, (selectionB) => {
                            if(selectionB === "Y"){
                                contact.phoneNumber = selection;
                                console.log("##     ")
                                console.log(`##     Phone Number changed to ${selection}`);
                                editContact(contact);
                            }else{
                                editContact(contact);
                            }
                        })
                    }
                })
            }else if(selection === "4"){
                console.log("##     ")
                console.log(displays(2));
                console.log("##     ");
                readline.question("##     Please enter a new Street Address (0 to go Back): ", (selection) => {
                    if(selection === "0"){
                        editContact(contact);
                    }else{
                        console.log("##     ")
                        readline.question(`##     Change Street Address: ${contact.address.streetAddress} to ${selection}? (Y/N) : `, (selectionB) => {
                            if(selectionB === "Y"){
                                contact.address.streetAddress = selection;
                                console.log("##     ")
                                console.log(`##     Street Address changed to ${selection}`);
                                editContact(contact);
                            }else{
                                editContact(contact);
                            }
                        })
                    }
                })
            }else if(selection === "5"){
                console.log("##     ")
                console.log(displays(2));
                console.log("##     ");
                readline.question("##     Please enter a new City (0 to go Back): ", (selection) => {
                    if(selection === "0"){
                        editContact(contact);
                    }else{
                        console.log("##     ")
                        readline.question(`##     Change City: ${contact.address.city} to ${selection}? (Y/N) : `, (selectionB) => {
                            if(selectionB === "Y"){
                                contact.address.city = selection;
                                console.log("##     ")
                                console.log(`##     City changed to ${selection}`);
                                editContact(contact);
                            }else{
                                editContact(contact);
                            }
                        })
                    }
                })
            }else if(selection === "6"){
                console.log("##     ")
                console.log(displays(2));
                console.log("##     ");
                readline.question("##     Please enter a new State (0 to go Back): ", (selection) => {
                    if(selection === "0"){
                        editContact(contact);
                    }else{
                        console.log("##     ")
                        readline.question(`##     Change State: ${contact.address.state} to ${selection}? (Y/N) : `, (selectionB) => {
                            if(selectionB === "Y"){
                                contact.address.state = selection;
                                console.log("##     ")
                                console.log(`##     State changed to ${selection}`);
                                editContact(contact);
                            }else{
                                editContact(contact);
                            }
                        })
                    }
                })
            }
        }
    })

}



const contactButtons = () => {
    
}

const displayContact = (contact) => {
    console.log("##     ");
    console.log(displays(1));
    console.log("##     ")
    console.log(`##     First Name: ${contact.firstName}          Last Name: ${contact.lastName}`);
    console.log(displays(2));
    console.log(`##     Phone Number: ${contact.phoneNumber}`);
    console.log(displays(2));
    console.log(`##     Address: ${contact.address.streetAddress}, ${contact.address.city} ${contact.address.state}`);
    console.log("##     ");
    console.log(displays(1));
    console.log("##                                __________       ____________       __________");
    console.log("##                               | [1] Edit |     | [2] Delete |     | [3] Back |");
    console.log("##                                **********       ************       **********");
    console.log("##     ");
    readline.question("##     What would you like to do? : ", (selection) => {
        if(selection !== "1" && selection !== "2" && selection !== "3"){
            console.log("##     Please select a valid option.");
            displayContact(contact);
        }else{
            if(selection === "1"){
                editContact(contact);
                
            }else if(selection === "2"){
                deleteContact(contact);
            }else if(selection === "3"){
                lookUp();
            }
        }
    })
    
}

const testContacts = (num, firstName, lastName) => {
    const testAddress = new Address(num, num, num);
    const testContact = new Contact(1, `${firstName}`, `${lastName}`, `${num}`, testAddress);
    phoneBook.push(testContact);
}

const createContact = (newContact, newAddress) => {
    const adrs = new Address(newAddress[0], newAddress[1], newAddress[2]);
    counter++;
    let contact = new Contact(counter, newContact[0], newContact[1], newContact[2], adrs);
    phoneBook.push(contact);
    console.log(`##     ${contact.firstName} ${contact.lastName} was added to the Phone Book.`)
    phonebook();
}

const addContact = () => {
    const newContact = []
    const newAddress = [];
    console.log("##     To add a Contact to the Phone Book, please fill in the details below.")
    readline.question('##     First Name: ', (selection) => {
        newContact.push(selection);
        readline.question('##     Last Name: ', (selection) => {
            newContact.push(selection);
            readline.question('##     Phone Number: ', (selection) => {
                newContact.push(selection);
                readline.question('##     Street Address: ', (selection) => {
                    newAddress.push(selection);
                    readline.question('##     City: ', (selection) => {
                        newAddress.push(selection);
                        readline.question('##     State: ', (selection) => {
                            newAddress.push(selection);
                            createContact(newContact, newAddress)
                        })
                    })
                })
            })
        })
    })
}

const lookUp = () => {
    console.log("##");
    console.log(displays(0));
    console.log("##");
    readline.question('##     Look up a contact by Name, Phone Number, or Address (0 to go Back): ', (selection) => {

        if(selection == 0){
            phonebook();
        }else{
            let results = [];
        
            let selectedContact;

            for(let i = 0; i < phoneBook.length; i++){
                if(phoneBook[i].firstName === selection || phoneBook[i].lastName === selection || phoneBook[i].phoneNumber === selection || phoneBook[i].address[0] === selection || phoneBook[i].address[1] === selection || phoneBook[i].address[2] === selection){
                    results.push(phoneBook[i])
                }
            }

            if(results.length > 1){
                console.log("##")
                console.log(`##     We've found more than one match for ${selection}.`)
                console.log("##")
                let counterB = 0;
                for(let a = 0; a < results.length; a++){
                    counterB++;
                    console.log(displays(2))
                    console.log(`##     [${counterB}] - ` + results[a].toString() + " " + results[a].address.toString());
                }
                console.log(displays(2))
                console.log(`##     [${counterB + 1}] - Go Back`);
                console.log(displays(2));
                readline.question('##     Please select the correct contact: ', (selection) => {
                    if(selection == counterB + 1){
                        lookUp();
                    }else{
                        selectedContact = results[Number(selection) - 1];
                        displayContact(selectedContact);
                    }
                })
            }else{
                displayContact(results[0]);
            }
        }
    })
}


const phonebookTitle = () => {
    console.log("###############################################################################################")
    console.log("##|     ____    _   _     ___     _   _    ____          __        ___      ___     _   _    ##");
    console.log("##|    |@@@@   |@  |@     @@@    |@  |@   |@@@@         |@@@       @@@      @@@    |@  @     ##");
    console.log("##|    |@__)@  |@__|@   |@  |@   |@@ |@   |@__          |@_)@    |@  |@   |@  |@   |@ @      ##");
    console.log("##|    |@@@@   |@@@@@   |@  |@   |@ @|@   |@@@          |@@@@    |@  |@   |@  |@   |@@@      ##");
    console.log("##|    |@      |@  |@   |@ _|@   |@  @@   |@___         |@__)@   |@ _|@   |@ _|@   |@  @     ##");
    console.log("##|    |@      |@  |@     @@@    |@   @   |@@@@         |@@@@      @@@      @@@    |@   @    ##");
    console.log("##|__________________________________________________________________________________________##");
    phonebook();
}


const phonebook = () => {
    console.log("###############################################################################################");
    console.log("##");
    console.log("##          To use the Phone Book, please select an option from the menu.");
    console.log("##                 _____________       _________________       __________");
    console.log("##                | [1] Look Up |     | [2] Add Contact |     | [3] Exit |");
    console.log("##                 *************       *****************       **********");
    console.log("##");
    readline.question("##     What would you like to do? : ", (selection) => {
        if(selection !== "1" && selection !== "2" && selection !== "3"){
            console.log("##     Please select a valid option.");
            menuButtons()
        }else{
           if(selection === "1"){
            lookUp();
           }else if(selection === "2"){
            addContact();
           }else if(selection === "3"){
               console.log("##     Exting Program");
               console.log("##")
               console.log("###############################################################################################");
               readline.close();
           }
        }
    })
    
}

testContacts("111", "Bob", "Sanders");
testContacts("222", "Frank", "Sanders");

phonebookTitle();