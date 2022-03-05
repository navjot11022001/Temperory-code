const express=require("express");
const app=express();
const mongoose=require("mongoose");
require("./db/conn");
const path=require("path");
const seedDb=require("./seed");
seedDb();

app.get("/",(req,res)=>{
    res.send("home page");
})

app.set("view engine",'ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));


const productRoutes=require("./routes/productRoutes");

app.use(productRoutes);
 

app.listen(5500,()=>{
    console.log("server started successfully");
})