import "./App.css";
import Dashbord from "./Components/Dashboard/dashbord"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import { useSelector } from 'react-redux';
function App() {
  const  IsLogin= useSelector((state)=> state.login.isLoggedIn)
  const  role =useSelector((state)=> state.login.roles)
  let Adminuser=false
  if(role=='admin'){
     Adminuser=true
  
  }else{
     Adminuser=false
  } 
  
  return (
    <BrowserRouter>
     {IsLogin&& Adminuser && <Dashbord/>}
     {IsLogin&& !Adminuser && <Dashbord/>}
      <Routes>
     
        <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
