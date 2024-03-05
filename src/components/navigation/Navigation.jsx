import React, { useState } from 'react';
import './navigation.css';
import LOGO from '../../assets/logo/Solo-logo.svg'

function Navigation() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  return (
    <div className='header'>
      <nav className="navigation">
        <a href="#hero" className="logo" onClick={handleLinkClick}><img src={LOGO} alt='logo' width={50}/>Kanaltechnik</a>

        <div className={`hamburger-menu ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        
        <ul className={`menu ${menuActive ? 'menu-active' : ''}`}>
          <li><a href="#our-services" onClick={handleLinkClick}>Unsere Dienstleistungen</a></li>
          <li><a href="#why-choose-us" onClick={handleLinkClick}>Warum wir?</a></li>
          <li><a href="#our-team" onClick={handleLinkClick}>Über uns</a></li>
        </ul>
        
        <a href="#contact" className="nav-appointment-btn" onClick={handleLinkClick}>Kontakt</a>
      </nav>
    </div>
  );
}

export default Navigation;
