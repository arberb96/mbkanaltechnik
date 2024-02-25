import React from 'react'
import './hero.css'
import './dynamic-text'
import  WORKERS from '../../assets/images/workers.svg'

function Hero() {
  return (
    <section id="hero">
        <div className="hero-content">
            <div className="hero-text">
                <h1 id="dynamic-heading">Dein Partner beim <br/> <span id="dynamic-text">...</span></h1>
                <p>"Von der Inspektion bis zur Sanierung: Lösungen für die Gesundheit Ihres Kanals und Ihr Seelenfrieden"</p>

                <div className="hero-text-btns">
                    <a href="#why-choose-us">Erfahre Mehr</a>
                    <a href="#contact" className="hero-contact-btn">Schnell kontakt</a>
                </div>
            </div>

            <div className="hero-img">
                <img alt="workers" src={WORKERS} />
            </div>
        </div>
    </section>
  )
}

export default Hero