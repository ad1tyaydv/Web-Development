interface User {
    firstName: String;
    lastName: String;
    age: number;
    email?: String;
}

function isLegal(user: User) {
    if(user.age > 18) {
        return true;
    } else {
        return false;
    }
}

function greet(user: User) {
    console.log("Hii there" + user.firstName);
}

isLegal({
    firstName: "Aditya",
    lastName: "Yadav",
    age: 20,
    email: "ADITYAYADAV"
})

-----------------------------------------------------------------------------------------------------------

   interface Person {
    firstName: String;
    lastName: String;
    age: number;
    greet(phrase: String): void;
};


class Employee implements Person {
    firstName: String;
    lastName: String;
    age: number;

    constructor(n: String, a: number) {
        this.firstName = n;
        this.lastName = ""
        this.age = a;
    }

    greet(pharse: String) {
        console.log(`${pharse} ${this.firstName}`);
    }
}

const e = new Employee("Aditya", 22);
console.log(e.firstName);


-----------------------------------------------------------------------------------------------------------------------


type greetArg = number | string | boolean;

function greet(id: (number | string)) {

}

greet(1);
greet("1");


----------------------------------------------------------------------------------------------------------------------


// What is the Difference between interface and a type
type Employee = {
    name: String;
    startDate: Date;
};

type Manager = {
    name: String;
    Department: string;
};

type TechLead = Employee & Manager;
type TechLead = {
    name: String;
    department: string;
    startDate: Date;
}
const t: TechLead = {
    name: "Aditya",
    startDate: new Date();
    department: "SDE-2"
}
