const express=require("express")
const { userAdded } = require("../controller/userController")
const userRoute=express.Router()


userRoute.post("/add",userAdded)


module.exports=userRoute