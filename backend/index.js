const express=require("express")
const connection=require("./connection/db.js");
const userRoute = require("./route/userRoute.js");
const app=express()
app.use(express.json());
require("dotenv").config()



app.use("/user",userRoute)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`connected to database`)
    } catch (error) {
        console.log(error)
    }
    console.log(`connect to port : ${process.env.port}`)

})