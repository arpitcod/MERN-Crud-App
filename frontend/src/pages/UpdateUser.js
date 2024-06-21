import React, { useEffect, useState} from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate, useParams} from 'react-router-dom'


const UpdateUser = () => {

    const {id} = useParams()
    //navigate 
    const navigate = useNavigate()
    const [user,setUser] = useState({})
       //register 

       const getSingleUser = async() =>{
        try {
            await axios.get(`http://localhost:2929/api/auth/get-single-user/${id}`)

            .then(response =>{
                if (response.data.success) {
                    setUser(response.data.getUser)
                    console.log(response.data.getUser)
                }
            }).catch(err =>{
                console.log(err)
                toast.error("error in getting user")
            })
        } catch (error) {
            console.log(error)
        }
       }

       useEffect(() =>{
        getSingleUser()
       },[])
    
       
       const handleSubmit = async (e) =>{
         e.preventDefault()
        //  console.log(user)
        //  navigate('/')
         
         try {
           await axios.put(`http://localhost:2929/api/auth/update-user/${id}`,{
             name:user.name,
             username:user.username,
             email:user.email,
             phone:user.phone
            })
            
            .then(reponse =>{
              if (reponse.data) {
                console.log(reponse)
                toast.success("User updated successfully")
                navigate('/')
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
    <form onSubmit={handleSubmit}>
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
      Update
    </button>
     {/* <button onClick={()=>{navigate('/')}}>click</button> */}
  </form>
  )
}

export default UpdateUser