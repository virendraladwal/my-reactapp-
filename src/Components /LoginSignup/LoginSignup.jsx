import React, { useState } from 'react'
import'./LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { act } from 'react-dom/test-utils'


export const LoginSignup = () => {

const [action,setAction] = useState("Login")

  return (
    <div className='container'>
      <div className='header'>
       <div className='text'>{action}</div>
       <div className='underline' > </div>
      </div> 

      <div className='inputs'>
        {action==="Login"?<div></div>: <div className='input'>
          <img src= {user_icon} alt=''/>
          <input type="text" placeholder='Name'/>
        </div>  
        } 
        <div className='input'>
          <img src= {email_icon} alt=''/>
          <input type="email" placeholder='Email Id' />
        </div>   

        <div className='input'>
          <img src= {password_icon} alt=''/>
          <input type="password" placeholder='password'/>
        </div>                     
      </div>
      
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost password? <span>click here</span></div>}
      
      <div  className='Submit-Container'>
       <div  className={action==="Login"?"Submit gray": 'Submit'}onClick={()=>{setAction("Sign Up")}}>sign up</div>
       <div  className={action==="Sign Up"?"Submit gray": 'Submit'}onClick={()=>{setAction("Login")}}>login</div>
      </div>
    </div>
  )
}
