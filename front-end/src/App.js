import "./App.css";
import Dashbord from "./Components/Dashboard/dashbord"
import {  Routes, Route ,   } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import SignupScreen from "./pages/Register/Register" 
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PublicRoutes from "./routes/PublicRoutes"
import Event from "./pages/Events/Event"
import { Box } from "@mui/material";
import EventDetails from "./pages/Events/EventDetails/EventDetails"
import Recipes from "./pages/Recipes/Recipes";
import AddRecipes from "./pages/Recipes/adminRecipes/AddRecipes";
import Business from "./pages/LocalBusinesses/Business";
import LocalBusinessesDetails from "./pages/LocalBusinesses/LocalBusinessesDetails/LocalBusinessesDetails";

function App() {
  const  IsLogin= useSelector((state)=> state.login.isLoggedIn)
  const  isAdmin =useSelector((state)=> state.login.IsAdmin)
  console.log("Admi",isAdmin)
  console.log("IsLogin",IsLogin)


  return (
    <Box>
    
      <ToastContainer />
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/:propertyId" element={<EventDetails />} />

          {/* <Route path="/recipe/:propertyId" element={<RecipeDetails />} /> */}
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/addrecipes" element={<AddRecipes />} />

          <Route path="/localbusinesses" element={<Business />} />
          <Route path="/localbusinessess/:propertyId" element={<LocalBusinessesDetails />} />

        </Route>

        {IsLogin && isAdmin && (
          <Route path="/adminhome" element={<Dashbord />}></Route>
        )}
        {!IsLogin && (
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignupScreen />} />
          </Route>
        )}
      </Routes>

    </Box>
  );
}

export default App;