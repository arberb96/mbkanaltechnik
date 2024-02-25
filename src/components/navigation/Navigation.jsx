import React from 'react'
import './navigation.css'

function Navigation() {
  const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('menu-active');
};
  

  return (
    <div className='header'>
    <nav className="navigation" >
        <a href="#hero" className="logo"><span>MB</span>Kanaltechnik</a>

        <div className="hamburger-menu" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        
        <ul className="menu">
            <li><a href="#our-services">Unsere Dienstleistungen</a></li>
            <li><a href="#why-choose-us">Warum wir?</a></li>
            <li><a href="#our-team">Über uns</a></li>
        </ul>
        
        <a href="#contact" className="nav-appointment-btn">Kontakt</a>
    </nav>
    </div>
  )
}

export default Navigation