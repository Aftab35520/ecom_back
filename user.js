const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
email:String,
first_name:String,
last_name:String,
password:String,
phone_no:String,
cart:Array
})

const usermodel=mongoose.model("user_data",userSchema)

module.exports=usermodel