const mongoose =  require("mongoose");

mongoose.connect("mongodb://localhost:27017/employee-api", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
console.log("connection is successful")
}).catch((e)=>{
    console.log("Error")
})