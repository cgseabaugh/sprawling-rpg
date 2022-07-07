const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const array = [];


const menu = () => {
    readline.question('What is your first name? ', (selection) => {

        const user = {}
        user.firstName = selection

        array.push(selection)

        readline.question('What is your last name? '), (selection) => {
            user.lastName = selection;
            array.push(user);
        }
        
    })
}

menu();