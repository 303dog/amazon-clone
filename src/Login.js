import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'


function Login() {

    return (
        <div className='login'>
            <Link>
                <img className='login__logo' 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1OvxccPYcW_1YWBC34Cs2-kOX4bd0z9EqQ6eS6PDR4k4-ghjL3PkeOYHCWwL1lS_RQ8&usqp=CAU'
                 alt="" />
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email'/>
                    <h5>Password</h5>
                    <input type='password' />
                    <button type='submit' className='login__signInButton'>Sign-in</button>
                </form>
                <p>by signing in you agree to all our legal stuff</p>
                <button className='login__registerButton'>Create Account</button>
            </div>
        </div>
    )

}

export default Login;