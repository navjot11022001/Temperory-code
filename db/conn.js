const dotenv=require("dotenv");
dotenv.config({path:'./config/config.env'});
const mongoose=require("mongoose");
  

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successful");
}).catch(err=>console.log("connection me error aarhai h "+err));



   