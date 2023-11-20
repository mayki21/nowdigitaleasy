const userModel=require("../model/userdetail.js")


const userAdded=async(req,res)=>{
    try {

        const { name, role, email, phonenumber } = req.body;

        
        const newUser = new userModel({ name, role, email, phonenumber });

        await newUser.save()

        return res.status(200).send({"msg":"user addded successfully",success:true})

        
        
    } catch (error) {
        return res.status(400).send(error.message)
        
    }

}

module.exports={userAdded}