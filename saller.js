const mongoose=require("mongoose")

const sallerSchema= new mongoose.Schema({
    product_Image:String,
    product_Name:String,
    product_price:Number,
    product_for:String,
    product_qty:Number

})

const sallerModel=mongoose.model("sallerproduct",sallerSchema)


module.exports=sallerModel