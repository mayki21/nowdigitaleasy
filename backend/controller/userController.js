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


const getDetail=async(req,res)=>{
    try {
        const data=await userModel.find()
        return res.status(200).send({data})
    } catch (error) {
        return res.status(400).send(error.message)
    }
}





const getSingleUser=async(req,res)=>{
    try {
        const { userId }=req.params
        const data=await userModel.findById(userId)
        if(!data){
            return res.status(400).send({message:"User not found"})
        }
        res.status(200).json({data})

    } catch (error) {
        res.status(404).send(error.message)
        
    }
}



exports.updateUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const { name, role, email, phoneNumber } = req.body;
      const updatedUser = await User.findByIdAndUpdate(userId, { name, role, email, phoneNumber }, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Error updating user' });
    }
  };

  
const updateUser=async(req,res)=>{
    try {
        const {userId}=req.params
        const {name,role,email,phonenumber}=req.body
        const updateuser=await userModel.findByIdAndUpdate(userId,{name,role,email,phonenumber},{new:true})
        if(!updateuser){
            return res.status(400).send({message:"User not found"})
        }

        return res.status(200).send({msg:"updated successfully",user:updateuser})
    } catch (error) {
        
        return res.status(404).send({message:error.message})   
     }
}
  

const deleteUser=async(req,res)=>{
    try {
        const {userId}=req.params
        const deluser=await userModel.findByIdAndDelete(userId)
        return res.status(200).send({msg:"user delete successfully"})
    } catch (error) {
        return res.status(400).send(error.message)
        
    }
}

module.exports={userAdded,getDetail,getSingleUser,updateUser,deleteUser}