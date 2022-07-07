const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let classroom = [];
let classroomId = 0;

class Person {

    constructor(name){
        if(this.constructor === Person) {
            throw new Error("You cannot instantiate this class");
        }
        this.name = name;
    }

    setName() {
        throw new Error("You cannot use an abstract method")
    }

    greeting =() => {
        throw new Error("You cannot use an abstract method")
    }

}

class Student extends Person {

    constructor(name){
        super(name)
    }

    greeting = () => {
        console.log("Hello, my name is " + this.name + " and I'm a student.");
    }

    setName(readline, id){
        readline.question('What is your name?: ', (selection) => {
            this.name = selection;
            this.id = id;
            classroomId++;
            console.log("Student has been added to classroom.")
            menu();
        })
    }

    setStudentWithObject(tempStudent) {
        this.name = tempStudent.name;
    }

    toString() {
        console.log('Student Name: ' + this.name)
    }

}
class Teacher extends Person {

    constructor(name){
        this.name = name;
    }

    greeting = () => {
        console.log("Hello, my name is " + this.name + " and I'm a teacher.");
    }

}
class Administrator extends Person {

    constructor(name){
        this.name = name;
    }

    greeting = () => {
        console.log("Hello, my name is " + this.name + " and I'm an administrator.");
    }

}



const menu = () => {
    
    readline.question('What would you like to do? [1] Create Person     [2] Show All Students     [3] Update Student', (selection) => {
        switch(selection) {
            case '1':
                createPerson()
                break;
            case '2':
                getAllStudents()
                break;
            case '3':
                updateStudent()
                break;
        }
    })
}

menu();

const createPerson = () => {
    readline.question('What is your role? [1] Student   [2] Teacher   [3] Administrator : ', (selection) => {
        switch(selection) {
            case '1':
                createStudent()
                break;
        }
    })
}

const createStudent = () => {
    const student = new Student();
    student.setName(readline, classroomId);
    classroom.push(student);
}

const getAllStudents = () => {
    classroom.map((student) => {
        student.toString()
    })
}

const updateStudent = () => {

    readline.question('What is your Student Id? : ', (selection) => {
        
    })

    classroom.map((student) => {
        if(student.id === tempStudent.id) {
            student.setStudentWithObject(tempStudent);
        }
    })
}
