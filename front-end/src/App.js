import "./App.css";
import Dashbord from "./Components/Dashboard/dashbord"
import { BrowserRouter, Routes, Route ,Navigate   } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import LocalBussiness from "./pages/LocalBussiness/LocalB";
import SignupScreen from "./pages/Register/Register" 
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import PublicRoutes from "./routes/PublicRoutes"
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Box } from "@mui/material";

function App() {
  const  IsLogin= useSelector((state)=> state.login.isLoggedIn)
  const  isAdmin =useSelector((state)=> state.login.IsAdmin)
  console.log("Admi",isAdmin)
  console.log("IsLogin",IsLogin)


  return (
  <Box>
    <ToastContainer/>
      <Routes>

      <Route path="/" element={<PublicRoutes/>} > 
      <Route path="/" element={<Home/>} /> 
      </Route>
  
{IsLogin&& isAdmin && <Route path="/adminhome" element={<Dashbord/>} > 
      <Route path="/adminhome" element={<Home/>} /> 
      <Route path="/adminhome/localb" element={<LocalBussiness/>} /> 
      </Route>
}


      { !IsLogin &&<Route path="/" element={<PublicRoutes/>} >
      <Route path="/login" element={<Login/>} /> 
      <Route path="/register" element={<SignupScreen/>} /> 
      </Route>}
 



      </Routes>



      </Box>

  );
}

export default App;
