import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

// dot env var using  
dotenv.config();

// connect databad 
connectDB()

const app = express();

app.use(cors())
app.use(express.json())
app.use('/api/auth',userRoutes);

app.get('/' ,(rq,rs)=>{
    rs.send("hare krishna")
})

app.listen(2929,()=>{
     console.log("your server is successfully running on port http://localhost:2929")
})