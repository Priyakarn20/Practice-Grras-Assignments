import React from 'react';
import './signup.css';

function Signup() {
    return (
        <div className="container">
            <div className="box-a">
                <div className="heading"> Signup Form</div>
                <div className="other">
                        <a className="login" href="http://localhost:3000/login">login</a>
                        <a className="sign-up" href="http://localhost:3000/signup">Signup</a>
                    </div>
                <form className="Signup-form">
                    <div className="field">
                        <input id="username" type="name" placeholder=" Email Address " />
                    </div>
                    <div className="field">
                        <input id="password" type="password" placeholder="Password" />
                    </div>
                    <div className="field">
                        <input id="password" type="password" placeholder=" Confirm Password " />
                    </div>
                   
                    <button className="Signup-button" title="Sign-uo">Signup</button>
                </form>
            </div>
           </div>

    );
}

export default Signup;