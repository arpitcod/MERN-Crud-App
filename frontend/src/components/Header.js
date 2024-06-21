import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/">All-Users</NavLink>
          {/* <NavLink className="nav-link" to="/all-user">All-Users</NavLink> */}
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/add-user">Add-User</NavLink>
        </li>
     
       
      </ul>
   
    </div>
  </div>
</nav>

  )
}

export default Header