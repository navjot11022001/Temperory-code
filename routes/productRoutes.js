const express=require("express");
const router=express.Router();
const Product=require("../models/product");

router.get("/products",async (req,res)=>{
const products=await Product.find({});
res.render('products/index',{products});
    
})

router.get("/products/new",(req,res)=>{
res.render('products/new')

})


router.post("/addproducts",async (req,res)=>{
const newProduct={
    ...req.body//iske sath sath extended new url parser use krlio bhai
}
await Product.create(newProduct);
res.redirect("/products");
})

module.exports=router;