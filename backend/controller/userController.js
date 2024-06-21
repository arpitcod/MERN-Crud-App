import userModel from "../models/userModel.js";

// user register controller 
export const registerController = async (rq,rs) =>{

    try {
        const {name,username,email,phone} = await rq.body;

        if (!name) {
           return rs.status(400).send({
                message:"name is required"
            })
        }
        if (!username) {
            return rs.status(400).send({
                message:"username is required"
            })
        }
        if (!email) {
            return rs.status(400).send({
                message:"email is required"
            })
        }
        if (!phone) {
            return rs.status(400).send({
                message:"phone is required"
            })
        }
    
        const existingUser = await userModel.findOne({email});
        if (existingUser) {
              return rs.status(401).send({
                success:false,
                message:"user already exist"
              })
        }
    
        const user = await new userModel({name,username,email,phone}).save();
    
        return rs.status(201).send({
    
            success:true,
            message:"user register successfully",
            user
        })
    } catch (error) {
        console.log(error)
        rs.status(500).send({
            success:false,
            message:"error in register",
            error
        })
    }
    
  
}


// get all user 


export const getAllUserController = async (rq,rs) =>{
    try { 
       const users=  await userModel.find({})

       return rs.status(200).send({
        success:true,
        message:"all users",
        users
       })
        
    } catch (error) {
        console.log(error)
        return rs.status(404).send({
            success:false,
            message:"users not found",
            error
        })
    }
}

//update user
export const updateUserController = async (rq,rs) =>{
    try {
        // const {name,username,email,phone} = await rq.body;

        // const userUpdate = await userModel.findByIdAndUpdate(rq.params.id,{...rq.body})
        const userUpdate = await userModel.findByIdAndUpdate(rq.params.id,{...rq.body},{new:true})

        return rs.status(200).send({
            success:true,
            message:"user updated",
            userUpdate
        })


    } catch (error) {
        console.log(error)

        return rs.status(500).send({
            success:false,
            message:"error in user update",
            error
        })
    }
}

//delete user 

export const deleteUserController = async(rq,rs) =>{
    try {
        const deleteUser = await userModel.findByIdAndDelete(rq.params.id);

        return rs.status(200).send({
            success:true,
            message:"user deleted successfully",
            deleteUser
        })
    } catch (error) {
        console.log(error)
        return rs.status(500).send({
            success:false,
            message:"error in deleteing user",
            error
        })
    }
}

//get single user

export const getSingleUser = async(rq,rs) =>{
    try {
         const getUser = await userModel.findById(rq.params.id);

         return rs.status(200).send({
            success:true,
            message:"getting single user",
            getUser
         })
    } catch (error) {
        console.log(error)
        return rs.status(500).send({
            success:false,
            message:"error in getting sinle user",
            error
        })
    }
}