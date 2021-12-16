import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="contact" element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
