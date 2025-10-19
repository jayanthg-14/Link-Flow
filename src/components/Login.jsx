import "./Login.css";

import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(""); 


    const login = async ()=>{
        try 
        {
            await signInWithEmailAndPassword(auth, email, password);
            console.log(auth.currentUser.email);
            navigate("/dashboard");
        }
        catch(err)
        {
        if (err.code === 'auth/invalid-credential') {
            setError("Invalid Credentials");
            } else {
            setError("Enter valid input");
            }
        }
    }

    const navigateSignin= ()=>{
        navigate("/");
    }

    return(
        <>

            <div id="loginContainer">

                <span id="loginTitle">Login</span>

                <div id="emailSection">
                    <span id="emailLabel">Login email</span>
                    <input type="text" id="emailField" placeholder="enter the email" onChange={(e)=>{ setEmail(e.target.value); }}/>
                </div>

                <div id="passwordSection">
                    <span id="passwordLabel">Password</span>
                    <input type="password" id="passwordField" placeholder="Enter the password" onChange={(e)=>{ setPassword(e.target.value); }}/>
                </div>
                {(error!="")&&<span>{error}</span>}
                    
                <div id="buttonSection">
                    <button onClick={login} id="loginBtn">Login</button>
                </div>

                <div id="linkSection">
                    <span>Create new Account? <a href="" onClick={navigateSignin}>Signup</a> </span>
                </div>



            </div>

        </>
    )
}
export default Login;