const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    price:{
type:Number,
min:0,
    },
    img:{
type:String,
trim:true,
default:'/images/product.jpg'
    },
    desc:{
        type:String,
        trim:true,
    }

});

const Product=mongoose.model('Product',productSchema);
module.exports=Product;