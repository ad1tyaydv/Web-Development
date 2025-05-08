const bcrypt = require("bcrypt");
const express = require("express");
const {UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "Adityayadav12890";
const { z } = require("zod");

mongoose.connect("mongodb+srv://adi:avanish@cluster0.cawz5vk.mongodb.net/todo-aditya-22");

const app = express();
app.use(express.json());

app.post("/signup", async function (req , res) {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })

    // const parsedData = requiredBody.parse(req.body);  // This will return the data if everything is correct or it will throw an error
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success)  {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);
    
    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
});

    res.json({
        message: "You are signed up"
    })
}); 

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password

    const response = await UserModel.findOne({
        email: email,
    })

    if(!response) {
        res.status(403).json({
            message: "User not found in our database"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password, response.password);
    
    if(passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        });
    }
    else {
        res.status(403).json({
            message: "Incorrect"
        })
    }
});

app.post("/todo", auth, function(req ,res) {
    const userId = req.userId;
    const title = req.body.title;
    TodoModel.create({
        title, 
        userId
    })

    res.json({
        userId : userId
    })
});

app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })
    req.json({
        todos
    })
});

function auth(req, res, next) {
    const token = req.headers.token;
    
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData) {
        req.userId = decodedData.id;
        next();
    }
    else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

app.listen(3000);
