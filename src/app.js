const express = require("express");
// require("./db/conn");
const app = express();
const port = process.env.PORT || 2900;

// app.get("/",(req,res)=>{
//     res.send("hello Shubham")
// })

app.post("/employe",(req,res)=>{
    res.send("Hello");
});
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})