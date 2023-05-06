import "./App.css";
import Dashbord from "./Components/Dashboard/dashbord"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import SignupScreen from "./pages/Register/Register" 
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import PublicRoutes from "./routes/PublicRoutes"
function App() {
  const  IsLogin= useSelector((state)=> state.login.isLoggedIn)
  const  isAdmin =useSelector((state)=> state.login.IsAdmin)
  console.log("Admi",isAdmin)
  console.log("IsLogin",IsLogin)
 
  return (
    <BrowserRouter>
    <ToastContainer/>



    {/* {IsLogin&& isAdmin &&<Dashbord/>} */}
 {/* {IsLogin&& !isAdmin && <Home/>} */}

      <Routes>

      <Route path="/" element={<PublicRoutes/>} > 
      <Route path="/" element={<Home/>} /> 
      </Route>


      { !IsLogin &&<Route path="/" element={<PublicRoutes/>} > 
      <Route path="/login" element={<Login/>} /> 
      <Route path="/register" element={<SignupScreen/>} /> 
      </Route>}
 
      </Routes>

    </BrowserRouter>
  );
}

export default App;
