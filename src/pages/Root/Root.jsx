import React from "react";
import Navbar from "../../components/Header/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";


const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
