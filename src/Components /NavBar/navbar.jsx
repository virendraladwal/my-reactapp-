import React from 'react';
import './navbar.css';
import logo from '../Assets/logo.webp'
import { Link } from "react-scroll"
import contactImg from "../Assets/contact.png"

export const Navbar = () => {
  return (
    <nav className="navbar">
       <img src={logo} alt="logo" className='logo'/>
       <div className="desktopMenu">
         <Link className="desktopMenuListItem">Home</Link>
         <Link className="desktopMenuListItem">Clients</Link>
         <Link className="desktopMenuListItem">Portfolio</Link>
         <Link className="desktopMenuListItem">Clients</Link>
        </div>
     <button className="desktopMenubtn">
        <img src={contactImg} alt="" className="dektopMenuImg" />Contact Me
     </button>
    </nav>
  )
}

export default Navbar
