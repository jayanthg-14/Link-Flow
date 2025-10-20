import "./CardPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin,
  faMedium, 
  faSquareBehance, 
  faSquareGithub, 
  faSquareInstagram, 
  faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { getDoc,doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db,auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {signOut} from "firebase/auth";



const CardPage = ()=>{
    const iconCollection = {"linkedin":faLinkedin , "email":faEnvelope , "behance": faSquareBehance, "github": faSquareGithub, "instagram": faSquareInstagram, "medium": faMedium , "twitter" : faSquareTwitter }
    const location = useLocation();
    const [path, setPath] = useState("");
  // To get the full path including query parameters

    useEffect(()=>{
            setPath("link-flow-rho.vercel.app"+location.pathname);
    }, [])

    // console.log(fullPath);
    
    const navigate = useNavigate();
    const {uniqueId} = useParams();
    console.log(uniqueId);
    console.log(typeof(uniqueId));
    const docRef = doc(db, "cardDetails" , uniqueId )
    console.log(docRef);
    const [data, setData] = useState({});


    
    const docData = async() =>{
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            setData(docSnap.data());
        } 
        else{
            console.log("nodata");
        }
    }


    useEffect(()=>{
        docData();
    },[uniqueId])


    const navigateDashboard = ()=>{
        navigate("/dashboard");
    }



      const copyToClipboard = () => {
    navigator.clipboard.writeText(path)
      .then(() => alert("Copied: " + path))
      .catch((err) => console.error("Failed to copy: ", err));};

    return(
        <>  

        <div id="cardContainer">
            <div id="cardHeader">
                <span id="cardTitle">{data.userName} - Digital Card</span>
                <span id="cardDescription">{data.description}</span>
            </div>
            
            <div id="linksContainer">
                

            {Object.entries(data).map(([key, value]) => (

                (key!="userId" && value!="" && key!="userName" && key!="description")&&<div className="linkContainer">
                    <FontAwesomeIcon icon={iconCollection[key]} size="1x" />
                    <span className="linkLabel" key={key}> {key}:</span>
                    <a className="linkField" href={value}> {value}</a>          
                </div>
                        ))}
            </div>
            <div id="pathSection"><input id="clipboardCopyInput" type="text" value={path}/><button id="clipboardCopyBtn"  onClick={copyToClipboard}>Copy to clipboard</button></div>
            <button id="dashboardBtn" onClick={navigateDashboard}>Edit</button>

    
        </div>
 
        </>
    )
}
export default CardPage;
