const express=require("express")
const { userAdded, getDetail, getSingleUser, updateUser, deleteUser } = require("../controller/userController")
const userRoute=express.Router()


userRoute.post("/add",userAdded)
userRoute.get("/get",getDetail)
userRoute.get("/getsingle/:userId",getSingleUser)
userRoute.patch("/update/:userId",updateUser)
userRoute.delete("/del/:userId",deleteUser)


module.exports=userRoute