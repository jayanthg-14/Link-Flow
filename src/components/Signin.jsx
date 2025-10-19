import "./Signup.css";

import { useState } from "react";


import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signin = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(""); 
    const authenticateSignin = async()=>
    {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            console.log(auth.currentUser.uid);
            navigate("/dashboard");
        }
        catch(err){
            if (err.code === 'auth/email-already-in-use') {
            setError("Email already exists.");
            } else {
            setError("An error occurred. Please try again.");
            }
            console.error(error); 
        }
    }

    const navigateLogin=()=>{
        navigate("/login");
    }


    return(
        <>
            <div id="signupContainer">
                <span id="signupTitle">SignUP</span>

                <div id="emailSection">
                    <span id="emailLabel">Email address</span>
                    <input type="text" id="emailField" placeholder="you@gmail.com" 
                    onChange={(e)=>{    setEmail(e.target.value);   }}/>
                </div>

                <div id="passwordSection">
                    <span id="passwordLabel">Password</span>
                    <input type="password" id="passwordField" placeholder="your secret password" onChange={(e)=>{    setPassword(e.target.value); }}/>    
                </div>
                {(error!="")&&<span>{error}</span>}
                <div id="buttonSection">
                    <button id="signupBtn" onClick={authenticateSignin}>Signup</button>
                </div>
                <div id="linkSection">
                    <span>Already have an account? <a href="" onClick={navigateLogin}>Login</a> </span>
                </div>


            </div>

        </>
    )
}

export default Signin;