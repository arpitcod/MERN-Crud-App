import mongoose from "mongoose";


const connectDB = async () =>{
    try {
         
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('your database connected successfully')
 
    } catch (error) {
        console.log("error in mongodb",error)
    }
}


export default connectDB;