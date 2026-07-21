import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50">
      
      {/* 2. Top Navbar */}
      <Navbar />

      {/* 3. Main content takes up ALL remaining space (flex-grow) */}
      <main className="flex-grow:1">
        <Outlet /> {/* Or your {children} / page content */}
      </main>

      {/* 4. Footer stays stuck at the bottom */}
      <Footer />
      
    </div>
  );
};

export default MainLayout;
