import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Display from "./Components/Home/Display/Display";
import AddExp from "./Components/Home/AddExp/AddExp";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import NavBar from "./Components/Home/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";
import axios from "axios";
function App() {
    const [load, setLoad]=useState(true)
    useEffect(()=>{
      axios.get('https://glacial-basin-60167.herokuapp.com/allData').then(()=>{
         setLoad(false)
      })
    },[])

    if(load){
      return(<div className="d-flex align-items-center justify-content-center h-100 position-absolute w-100">
      <div
        class="spinner-border"
        style={{ width: "4rem ", height: "4rem" }}
        role="status"
      >
      </div>
    </div>
  )
    }
  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="experience/:id"
          element={
            <PrivateRoute>
              <Display></Display>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="addexperience"
          element={
            <PrivateRoute>
              <AddExp></AddExp>
            </PrivateRoute>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
