import User from '../model/userSchema.js'

export const getAllUsers = async (req,res)=>{
    const allusers = await User.find({})
    res.status(201).json(allusers)
}

export const getUser = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(201).json(user)
        //console.log("User: ",userDetails)
    }
    catch(error){
        //console.log(userDetails)
        console.log("Error in getting requested user details")
    }
}

export const createUser = async(req,res)=>{
    try{
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).json(newUser)
    }
    catch(error){
        res.status(409).json({message: error.message})
    }
}

export const updateUser = async(req,res)=>{
    try{
        await User.updateOne({_id: req.params.id}, req.body)
        res.status(201).json("User deleted Successfully")
        //console.log("User: ",updatedUser)
    }
    catch(error){
        //console.log(userDetails)
        console.log("Error in getting requested user details")
    }
}

export const deleteUser = async(req,res)=>{
    console.log(req.params.id)
    try{    
        const deletedUser = await User.deleteOne({_id:req.params.id})
        res.status(201).json(deletedUser)
        console.log(deleteUser)
    }
    catch(error){
        console.log(error)
    }
}