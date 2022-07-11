import React, { useState } from "react";
import "./login.css"

import logo from "../assets/logo.png";

import { MdAccountCircle, MdLock } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible} from "react-icons/ai"


function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const passwordVisibility = (e) => {
        e.preventDefault()
        setShow(!show);
    };

    const preventLink = (e) => {
        e.preventDefault()
    }

    return (
    <div className="login">
        <div className="login-container">
            <img src={logo} alt="logo"/>
            <h1>Hello Hero!</h1>
            <div className="login-input-name">
                <MdAccountCircle/>
                <input type="text" placeholder="Name" value={user} onChange={e => setUser(e.target.value)}/>
            </div>
            <div className="login-input-password">
                <MdLock/>
                <input type={show ? "text" : "password"} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <div className="login-eye">
                    {show ? (<AiFillEye onClick={passwordVisibility} />) : (<AiFillEyeInvisible onClick={passwordVisibility} />)}
                </div>
            </div>
            <a href="youtube.com" onClick={preventLink} className="login-button">Login</a>
            <h4>New Hero?</h4> <a href="a" onClick={preventLink} className="login-singup">Create an account</a>

        </div>
    </div>
    );
}

export default Login;