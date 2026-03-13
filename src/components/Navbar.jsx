import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar(){

const [darkMode,setDarkMode] = useState(false);

useEffect(() => {
  if(darkMode){
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
},[darkMode]);

function toggleTheme(){
  setDarkMode(prev => !prev);
}

return(

<nav className="navbar">

<div className="nav-left">
<img src="/logo.png" alt="logo" className="nav-logo"/>
<span className="nav-title">Microsoft Club</span>
</div>

<div className="nav-right">

<NavLink to="/" className="nav-button">
<i className="fa-solid fa-house"></i> Home
</NavLink>

<NavLink to="/about" className="nav-button">
<i className="fa-solid fa-user"></i> About
</NavLink>

<NavLink to="/team" className="nav-button">
<i className="fa-solid fa-users"></i> Team
</NavLink>

<NavLink to="/projects" className="nav-button">
<i className="fa-solid fa-folder"></i> Projects
</NavLink>

<NavLink to="/contact" className="nav-button">
<i className="fa-solid fa-envelope"></i> Contact
</NavLink>

<button className="theme-toggle" onClick={toggleTheme}>
{darkMode ? "🌙":"☀️" }
</button>

</div>

</nav>

);
}

export default Navbar;