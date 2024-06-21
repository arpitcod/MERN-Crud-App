import express from 'express'
import { deleteUserController, getAllUserController, getSingleUser, registerController, updateUserController } from '../controller/userController.js';


const router = express.Router();

// create user  http://localhost:2929/api/auth/register
router.post('/register',registerController)

//get all users  http://localhost:2929/api/auth/get-all-user
router.get('/get-all-user',getAllUserController)


//update user http://localhost:2929/api/auth/update-user/663f412aef6d7b7e43296986
router.put('/update-user/:id',updateUserController)


//update user http://localhost:2929/api/auth/delete-user/663f412aef6d7b7e43296986
router.delete('/delete-user/:id',deleteUserController)

// get single user http://localhost:2929/api/auth/get-single-user/663fbc796406087ff423b046
router.get('/get-single-user/:id',getSingleUser)

export default router