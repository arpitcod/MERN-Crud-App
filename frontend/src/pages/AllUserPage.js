import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AllUserPage = () => {
  const [users,setUsers] = useState([])
  const {id} = useParams();

  const navigate = useNavigate()

  const getAllUser = async() =>{
    try {
       await axios.get('http://localhost:2929/api/auth/get-all-user')
       .then(response =>{
        if (response?.data?.users) {
          console.log(response?.data?.users)
          setUsers(response?.data?.users)
        }
       }).catch(err =>{
        console.log(err)
       })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    getAllUser()
  },[])


  //delete user

  const handleDelete = async(id) =>{
    try {
           await axios.delete(`http://localhost:2929/api/auth/delete-user/${id}`)
          //  toast.success("user deleted successfully")
           .then(response =>{
            if (response.data.success) {
              toast.success("user deleted successfully")
              getAllUser()
            }
           }).catch(err =>{
            toast.error("error in delete user")
            console.log(err)
           })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
     <div>
  <table className="table">
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Name</th>
        <th scope="col">UserName</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>

    <tbody>
      {
        users.map((user,index) =>(
         
            <tr key={user?._id}>
              <th scope="row">{index}</th>
              <td>{user?.name}</td>
              <td>{user?.username}</td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>
                <button type="button" class="btn btn-warning" onClick={()=>navigate(`/update-user/${user._id}`)}>Edit</button>
              
              <button type="button" class="btn btn-danger mx-2" onClick={()=>handleDelete(user._id)}>Delete</button>
              </td>

            </tr>
          
         
        ))
      }
          </tbody>
  </table>
</div>

    </>
  );
};

export default AllUserPage;
