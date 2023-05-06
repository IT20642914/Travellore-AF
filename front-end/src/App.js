import "./App.css";
import Dashbord from "./Components/Dashboard/dashbord"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
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
 {   IsLogin&& isAdmin &&<Dashbord/>}
 {IsLogin&& !isAdmin && <Home/>}
      <Routes>
    
      {  !IsLogin &&<Route path="/" element={<PublicRoutes/>} > 
      <Route path="/" element={<Login/>} /> 
      </Route>}
 
      </Routes>

    </BrowserRouter>
  );
}

export default App;
