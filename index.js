const express = require("express");
const app = express();
app.get('/',(req,res)=>{
    res.json([
        {
            id:1,
            name:"Deepesh Rastogi",
            age:30   
        },
        {
            id:2,
            name:"Ravi Singh",
            age:20   
        },
    ])
});

app.listen(5500,()=>{
    console.log("app is running 5500 port");
});
