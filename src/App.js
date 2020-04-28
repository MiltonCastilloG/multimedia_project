import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Menu from "./components/Menu.js";
import AppRoutes from "./AppRoutes.js";

const App = () => {
  const [menuFlag, setMenuFlag] = useState(false);

  const renderMenu = menuFlag ? <Menu /> : <div/>

  const toggleMenu = () => setMenuFlag(!menuFlag)

  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar
        iconFlag={menuFlag}
        menuIconCallback={toggleMenu}
        />
        {renderMenu}
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;