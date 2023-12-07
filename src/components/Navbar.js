import React from "react";
// import { logo } from "../../public/company-logo.svg"
const Navbar = () =>{
    return(
  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className="logo img-fluid" src="/company-logo.svg"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    About 
                    </a>
                    <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Founder</a>
                    <a className="dropdown-item" href="#">Technology</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                </ul>
                <div className="right-side my-2 my-lg-0">
                    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
                    <span className="fa fa-search pointer" style={{color:"#455A64"}}></span>
                    <span className="fa fa-bell pointer" style={{color:"#455A64"}}></span>
                    <span className="profile-div pointer">DR</span>
                </div>
                </div>
            </nav>
    )
}
export default Navbar