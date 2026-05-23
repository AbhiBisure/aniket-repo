// const express = require("express");

// const app = express();
// app.use(express.json());

// let users = [];

// app.post("/users", (req, res) => {
//   users.push(req.body);
//   res.status(201).json({
//     message: "User Added",
//   });
// });

// app.get("/users", (req, res) => {
//   res.json(users);
// });

// app.listen(3000);


const fs = require("fs")

fs.readFile("text.txt","utf8",(err,data)=>{
    if(err)
    {
        console.log(err);
        return;
    }

    console.log(data);
});