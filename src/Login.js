import React, {useState} from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import {auth} from './firebase';


function Login() {

    const history = useHistory();
    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');

    const loginuser= event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const signupuser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then(auth => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

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
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type='email'/>
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type='password' />
                    <button onClick={loginuser} type='submit' className='login__signInButton'>Sign-in</button>
                </form>
                <p>by signing in you agree to all our legal stuff</p>
                <button onClick={signupuser} className='login__registerButton'>Create Account</button>
            </div>
        </div>
    )

}

export default Login;