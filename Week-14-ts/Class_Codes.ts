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
