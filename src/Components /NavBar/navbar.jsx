import React from 'react';
import './navbar.css';
import logo from '../Assets/logo.webp'
import { Link } from "react-scroll"
import contactImg from "../Assets/contact.png"
import Search from "../Assets/search.png" 
import Person from "../Assets/person.png" 
import Notification from "../Assets/notification.png" 


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
     <div className='round'>
      <button className="desktopMenubtn">
          <img src={contactImg} alt="" className="dektopMenuImg" />
      </button>
      <button className="desktopMenubtn">
          <img src={Search} alt="" className="dektopMenuImg" />
      </button>
      <button className="desktopMenubtn">
          <img src={Notification} alt="" className="dektopMenuImg" />
      </button>
      <button className="desktopMenubtn">
          <img src={Person} alt="" className="dektopMenuImg" />
      </button>
     </div>
    </nav>
  )
}

export default Navbar
