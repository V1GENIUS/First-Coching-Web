import {  Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './Pages/Homepage';
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Signup from './Pages/Login/Signup';
// import Navbar from './Components/Navbar';
import TermCondition from "./Pages/TermCondition";


export default function MyApp() {   
  return (
    <>
    <header>  

    </header>
      <Routes>
                <Route path="Homepage" element={<Homepage />} />
                <Route path="/AboutUs" element={<AboutUs />}/>
                <Route path="/Signup" element={<Signup />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/Term_Condition" element={<TermCondition />} />
            </Routes>
    </>
    
  );
}
