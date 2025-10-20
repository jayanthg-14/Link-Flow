    import {Routes, Route} from "react-router-dom";
    import Signin from "./components/Signin";
    import Login  from "./components/Login";
    import Dashboard from "./components/Dashboard";
    import CardPage from "./components/CardPage";
    import Title from "./components/Title";
    import "./Parent.css"
    const Parent = ()=>{
        return(
            <>
                <div id="parentContainer">
                    <Title></Title>
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