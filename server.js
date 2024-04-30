const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const parse=require("body-parser")
const sallerModel=require("./saller")
const usermodel = require("./user")

mongoose.connect("mongodb://localhost:27017/ecommerce")


const app=express()
app.use(parse.json({limit: '50mb'}));
app.use(parse.urlencoded({limit: '50mb', extended: true}));
app.use(cors())
app.use(parse.json())

app.post("/saller",async(req,res)=>{
    const sallerbase= new  sallerModel
    sallerbase.product_Image=req.body.product_image
    sallerbase.product_Name=req.body.product_Name
    sallerbase.product_price=req.body.product_price
    sallerbase.product_for=req.body.product_for
    sallerbase.product_qty=req.body.product_qty
    await sallerbase.save()
    
})


app.get("/saller",async(req,res)=>{
     products=await sallerModel.find({})
     res.json(products)
})

app.post("/Userdata",async(req,res)=>{
    const userModel= new usermodel
    userModel.first_name=req.body.first_name
    userModel.last_name=req.body.last_name
    userModel.phone_no=req.body.phone_no
    userModel.email=req.body.email
    userModel.password=req.body.password
    userModel.cart=req.body.cart
    await userModel.save()
    console.log(userModel)
    
})

app.post("/UserdataCheck",async(req,res)=>{
    const data=await usermodel.find({email:req.body.Loginemail,password:req.body.Loginpassword})
    res.json(data)
})

app.post("/cart",async(req,res)=>{
    const data= await usermodel.updateOne({_id:req.body.cartunique},{$set:{cart:req.body.cart_data}})
    console.log(data)
})
app.post("/cartdataforuser",async(req,res)=>{ 
    const data= await usermodel.findOne({_id:req.body.id})
    res.json(data.cart)

})

app.listen(5000,()=>{
    console.log("server is live")
})