import React, { useState } from 'react';
import "./Home.css";
import RectangleImage from "./Rectangle.png"; 


function Home() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`home ${collapsed ? 'collapsed' : ''}`}>
   
     <img class="background-image" src={RectangleImage} alt='' />
    <div className='home__header'>
<h1 className='home__logo'>Logo</h1>


<button className="navbar-toggle" onClick={toggleNavbar}>
        <span className="navbar-icon">&#9776;</span>
      </button>
      <div className={`home__home ${collapsed ? 'collapsed' : ''}`}>
    <h3>JOIN NOW</h3>

    <h3>LOGIN</h3>

    <h3>MEMBERSHIP</h3>
    <h3>HOW IT WORKS</h3>
    <h3>SIGN UP</h3>
</div>
</div>
<div className='home__body'> 
<p className='body__text'>'BEST FITNESS GYM'</p>
<p>MAKE TIME WITH US, Get your body ready to fit.</p>

<div className='home__footer'>
    <button className='footer__one'>I'm ready</button>
    <button className='footer__two'>Not today?</button>
</div>
</div>
    </div>
  );
}

export default Home;