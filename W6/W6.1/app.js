const express = require("express");
const app = express();
app.use(express.json());

const users = [];

function generate() {
    const options = "1234567890";
    
    let reg_no = "";

    for(let i=0;i<10;i++) {
        reg_no += options[Math.floor(Math.random() * options.length)];
    }

    return reg_no;
}

app.post("/student", function(req, res) {
    const student  = req.body.student;
    const father = req.body.father;
    const mother = req.body.mother;
    const phone = req.body.phone;

    const reg_no = generate();

    users.push({
        student: student,
        father: father,
        mother: mother,
        phone: phone,
        reg_no: reg_no
    })

    res.json({
        message: "Registration Successfull",
        reg_no: reg_no
    })

    console.log(users);
})

app.get("/me", function(req, res) {
    const reg_no = req.headers.reg_no;

    let foundUser = null;
    
    for(let i=0;i<users.length;i++) {
        if(users[i].reg_no == reg_no) {
            foundUser = users[i];
        }
    }

    if(foundUser) {
        res.json({
            student: foundUser.student,
            father: foundUser.father,
            mother: foundUser.mother,
            phone: foundUser.phone
        })
    }
    else {
        res.json({
            message: "Invalid registration number"
        })
    }
})

app.listen(3000, function() {
    console.log("Running on port 3000");
})