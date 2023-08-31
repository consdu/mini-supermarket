import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout(): React.ReactElement {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
