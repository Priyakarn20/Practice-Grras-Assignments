import React from 'react';
import './login.css';
import './signup.js';

function Login() {
    return (
        <div className="container">
            <div className="box-a">
                <div className="heading"> Login Form</div>
                <div className="other">
                        <a className="login" href="http://localhost:3000/login">login</a>
                        <a className="sign-up" href="http://localhost:3000/signup">Signup</a>
                    </div>
                <form className="login-form">
                    <div className="field">
                        <input id="username" type="name" placeholder=" Email Address " />
                    </div>
                    <div className="field">
                        <input id="password" type="password" placeholder="Password" />
                    </div>
                    <div>
                        <a className="forgot-password" href="#">Forgot password?</a>
                    </div>
                    <button className="login-button" title="login">Log In</button>
                </form>
            </div>
            <div className="box">
                <p>Not a member? <a className="signup" href="http://localhost:3000/signup">signUp now</a></p>
            </div>



        </div>

    );
}

export default Login;