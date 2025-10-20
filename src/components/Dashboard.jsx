import "./Dashboard.css"
import userImage from "../images/user.png";
import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { setDoc, doc, getDoc} from "firebase/firestore";
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () =>{
    const navigate = useNavigate();
    const [presentData, setPresentData] = useState({});

    const [userName, setUserName] = useState("");
    const [description, setDescription] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");
    const [twitter, setTwitter] = useState("");

    const docRef = doc(db, "cardDetails", auth.currentUser.uid);

    const addDetails = async()=>{
        try{
            await setDoc(docRef, {
                userName: userName,
                userId: auth.currentUser.uid,
                linkedin: linkedin,
                email: email,
                github: github,
                instagram: instagram,
                twitter: twitter,
                description: description
            }, {merge:true})
            navigate(`/card/${docRef.id}`)   ;
        }
        catch(err){
            console.log(err);
        }
    }



    const getData = async() =>{
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            setPresentData(docSnap.data());
        } 
        else{
            console.log("nodata");
        }
    }



    useEffect(()=>{
        getData();
        // console.log(presentData);
    }, [])

    useEffect(()=>{
        console.log(presentData);
        setUserName(presentData.userName);
        setDescription(presentData.description)
        setLinkedin(presentData.linkedin);
        setEmail(presentData.email);
        setGithub(presentData.github);
        setInstagram(presentData.instagram);
        setTwitter(presentData.twitter);
    }, [presentData]);


    const logout = async()=>{
        try
        {
            await signOut(auth);
            navigate("/login");

        }
        catch(err)
        {
            console.log(err);
        }
    }

    return(
        <>
            <div id="dashboardContainer">
                <button id="logoutBtnDashboard" onClick={logout}>Logout</button>

                <img src={userImage} id="userLogo" alt="userimage" />
                <span id="dashboardTitle">My Digital Links</span>
                <div id="linksContainer">
                    <div className="linkContainerDashboard">
                        <label>Name:</label>
                        <input type="text" value={userName} placeholder="Enter Username" onChange={(e)=>{
                            setUserName(e.target.value);
                        }}/>
                    </div>

                    <div className="linkContainerDashboard" id="linkContainerTextArea">
                        <label>Description:</label>

                        <textarea id="" value={description} placeholder="Enter Description" onChange={(e)=>{
                            setDescription(e.target.value);
                        }}></textarea>
                        
                    </div>


                    <div className="linkContainerDashboard">
                        <label>Linkedin:</label>
                        <input type="url" placeholder="Linkedin Profile Link" value={linkedin} onChange={(e)=>{
                            setLinkedin(e.target.value);
                        }}/>
                    </div>

                    <div className="linkContainerDashboard">
                        <label>Email:</label>
                        <input type="url" placeholder="Email Link" value={email} onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>            
                    </div>

                    <div className="linkContainerDashboard">
                        <label>Github:</label>
                        <input type="url" value={github} placeholder="Github Profile Link" onChange={(e)=>{
                            setGithub(e.target.value);
                        }}/>
                    </div>
                    
                    <div className="linkContainerDashboard">
                        <label>Instagram:</label>
                        <input type="url" value={instagram} placeholder="Instagram Profile Link" onChange={(e)=>{
                            setInstagram(e.target.value);
                        }}/>
                    </div>
                    
                    <div className="linkContainerDashboard">
                        <label>Twitter:</label>
                        <input type="url" value={twitter} placeholder="Twitter Profile Link" onChange={(e)=>{
                            setTwitter(e.target.value);
                        }}/>
                    </div>

                </div>
            

                <button id="submitBtn" onClick={addDetails}>Submit</button>
            </div>
            
        </>
    )
}

export default Dashboard;