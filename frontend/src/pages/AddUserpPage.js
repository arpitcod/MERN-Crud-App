import React, { useState} from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'


const AddUserpPage = () => {

  
  const [user,setUser] = useState({
    name:"",
    username:"",
    email:"",
    phone:""
  })
   //register 
   const navigate = useNavigate()

   //navigate 
   
   const handleSubmit = async (e) =>{
     e.preventDefault()
     console.log(user)
     navigate('/')
     
     try {
       await axios.post('http://localhost:2929/api/auth/register',{
         name:user.name,
         username:user.username,
         email:user.email,
         phone:user.phone
        })
        
        .then(reponse =>{
          if (reponse.data) {
            console.log(reponse)
            toast.success("register suucessfully")
            navigate('/all-user')
            setUser(reponse.data)
            
            
          }
        }).catch(err =>{
          console.log(err)
        })
        
        
      } catch (error) {
        console.log(error)
     }
  }
  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          // id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={user.name}
          onChange={(e) =>{
            setUser((prev) =>{
              return {
                ...prev,
                name:e.target.value
              }
            })
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          UserName
        </label>
        <input
          type="text"
          className="form-control"
          // id="exampleInputPassword1"
          value={user.username}
          onChange={(e)=>{
            setUser((prev)=>{
                
              return{
                ...prev,
                username:e.target.value
              }
            }) 
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          // id="exampleInputPassword1"
          value={user.email}
          onChange={(e) =>{
            setUser((prev) =>{
              return{
                ...prev,
                email:e.target.value
              }
            })
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Phone
        </label>
        <input
          type="number"
          className="form-control"
          // id="exampleInputPassword1"
          value={user.phone}
          onChange={(e) =>{
            setUser((prev) =>{
              return{
                ...prev,
                phone:e.target.value
              }
            })
          }}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
       {/* <button onClick={()=>{navigate('/')}}>click</button> */}
    </form>
  );
};

export default AddUserpPage;
