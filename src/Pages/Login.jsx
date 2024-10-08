import React, { useState } from 'react';
import './Login.css';
import App from '../App';
import { memo } from "react";
import Registerr from './Registerr';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { GoogleOAuthProvider } from '@react-oauth/google';

function Login(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [errorMessage, setErrorMessage] = useState('');

    // async function handleGoogle(response) {
    //     const email = jwtDecode(response.credential).email.toString();
    //     const res = await fetch('http://localhost:8080/api/auth/token', {
    //         method: 'POST',
    //         body: email,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const json = await res.text();
    //     setToken(json);
    //     localStorage.setItem('token', json)
    // }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    
                },
                body: JSON.stringify({
                    email: userName,
                    password: password
                })
            });

            if (response.ok) {
                const userInfoData = await response.json();
                setIsLoggedIn(true);
                setToken(userInfoData.accessToken);
                localStorage.setItem('token');
                console.log('token', userInfoData.accessToken);

                setErrorMessage('');
            } else {
                const errorData = await response.json();
                if (errorData.message === "Bad credentials") {
                    setErrorMessage("Username or Password is incorrect");
                } else {
                    setErrorMessage(errorData.message || 'Username or Password is incorrect');
                }
            }
        } catch (error) {
            setErrorMessage('Error: Username or Password is incorrect' );
        }
    };

    if (isLoggedIn || token) {
        return <App token={token} />;
    }

    if (isRegister) {
        return <Registerr />;
    }

    return (
        <div className='bodyLogin'>
            <div className="wrapper">
                <div className="form-box login">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail"></ion-icon></span>
                            <input
                                type="text"
                                required
                                name="uname"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <label>User Name</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"></span>
                            <input
                                type="password"
                                required
                                name="psw"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <div id='dd'>{errorMessage && <p>{errorMessage}</p>}</div>
                        <button type="submit" className="btn">Login</button>
                        <div className="login-register">
                            <div style={{ display: "flex" }}>Don't have an account? <div className='register' onClick={() => setIsRegister(true)}> Register </div></div>
                        </div>
                    </form>
                    <div>
                {/* <GoogleLogin
                    onSuccess={(credentialResopnse) => handleGoogle(credentialResopnse)}
                    onError={(error) => setErrorMessage('Google login failed: ' + error.message)}
                /> */}
            </div>
            
                </div>
                
            </div>
           
        </div>
    );
}

export default memo(Login);
