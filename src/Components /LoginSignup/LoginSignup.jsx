import React, { useState } from 'react';
import './LoginSignup.css';

import userIcon from '../Assets/person.png';
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';

export const LoginSignup = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action === "Login" ? "Welcome Back!" : "Join Us Today!"}</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                {action === "Login" ? null :
                    <div className='input animated'>
                        <img src={userIcon} alt='' />
                        <input type="text" placeholder='Your Name' />
                    </div>
                }
                <div className='input animated'>
                    <img src={emailIcon} alt='' />
                    <input type="email" placeholder='Email Address' />
                </div>
                <div className='input animated'>
                    <img src={passwordIcon} alt='' />
                    <input type="password" placeholder='Password' />
                </div>
            </div>

            {action === "Sign Up" ? null :
                <div className="forgot-password animated">Forgot your password? <span>Click here</span></div>
            }

            <div className='action-buttons'>
                <div className={action === "Login" ? "action-button active" : "action-button"} onClick={() => { setAction("Login") }}>Login</div>
                <div className={action === "Sign Up" ? "action-button active" : "action-button"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
            </div>
        </div>
    );
};
