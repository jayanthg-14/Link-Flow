import {Routes, Route} from "react-router-dom";
import Signin from "./Signin";
import Login  from "./Login";
import Dashboard from "./Dashboard";
import CardPage from "./CardPage";
import "./Parent.css"
const Parent = ()=>{
    return(
        <>
            <div id="parentContainer">
            <Routes>
                <Route path="/" element={<Signin></Signin>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                <Route path="/card/:uniqueId" element={<CardPage></CardPage>}></Route>                
            </Routes>
            </div>
            
        </>
    )
}
export default Parent;