import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { useState } from "react";


const Root = () => {
     
    // const location = useLocation();
    //  const enable = location.pathname.includes('signup') || location.pathname.includes('login')
    return (
        <>
            <Navbar ></Navbar>
            <Outlet></Outlet>
              <Footer></Footer>
        </>
    );
};

export default Root;