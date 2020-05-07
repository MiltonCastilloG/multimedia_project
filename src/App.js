import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Menu from "./components/Menu.js";
import AppRoutes from "./AppRoutes.js";

const App = () => {
  const [menuFlag, setMenuFlag] = useState(false);

  useEffect(() => {
    if(menuFlag) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [menuFlag]);

  const toggleMenu = () => setMenuFlag(!menuFlag)
  const closeMenu = () => setMenuFlag(false)

  const renderMenu = menuFlag ? <Menu closeMenu={closeMenu}/> : <div/>


  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar
        iconFlag={menuFlag}
        menuIconCallback={toggleMenu}
        closeMenu={closeMenu}
        />
        {renderMenu}
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;