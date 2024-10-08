import React from 'react'

function Navbar() {
  return (
   <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
  <div className="container">
  
    <a className="navbar-brand text-white" href="#"><b>Sterial</b></a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className=" collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">AboutUs</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Blog</a>
        </li>
      </ul>
            <div className="d-flex">
            <a href="#" className="BtnContact ">Contact </a>
            </div>
    </div>
    
  </div>
</nav>


   </div>
  )
}

export default Navbar