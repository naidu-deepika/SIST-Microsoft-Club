import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(){

const [darkMode,setDarkMode] = useState(false)

function toggleTheme(){

setDarkMode(!darkMode)

if(!darkMode){
document.body.classList.add("dark-mode")
}else{
document.body.classList.remove("dark-mode")
}

}

return(

<nav className="navbar">

<div className="nav-left">

<img src="/logo.png" alt="logo" className="nav-logo"/>

<span className="nav-title">Microsoft Club</span>

</div>


<div className="nav-right">

<Link to="/">
<button className="nav-button">
<i className="fa-solid fa-house"></i> Home
</button>
</Link>

<Link to="/about">
<button className="nav-button">
<i className="fa-solid fa-user"></i> About
</button>
</Link>

<Link to="/team">
<button className="nav-button">
<i className="fa-solid fa-users"></i> Team
</button>
</Link>

<Link to="/projects">
<button className="nav-button">
<i className="fa-solid fa-folder"></i> Projects
</button>
</Link>

<Link to="/contact">
<button className="nav-button">
<i className="fa-solid fa-envelope"></i> Contact
</button>
</Link>

<button className="theme-toggle" onClick={toggleTheme}>
{darkMode ? "☀️" : "🌙"}
</button>

</div>

</nav>

)

}

export default Navbar;