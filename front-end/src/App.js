import "./App.css";
import Dashbord from "./Components/Dashboard/dashbord"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
  <Dashbord/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
