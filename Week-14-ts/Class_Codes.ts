interface User {
    firstName: String;
    lastName: String;
    age: number;
    email?: String;
};

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
    name: String;
    age: number;

    constructor(n: String, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(pharse: String) {
        console.log(`${pharse} ${this.name}`);
    }
}

const e = new Employee("Aditya", 22);
console.log(e.name);
