import "./App.css";
import Dashbord from "./Components/Dashboard/dashbord"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>

  {/* <Dashbord/> */}
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
