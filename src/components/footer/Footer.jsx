import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import LOGO from '../../assets/logo/Solo-logo.svg'

function Footer() {
  return (
    <footer>
        <div className="footer-container">
            
            <div className="footer-company-box">
                
                <a href="/" className="footer-logo"><img src={LOGO} alt='logo' width={50}/>Kanaltechnik</a>
                
                <p>"Von der Inspektion bis zur Sanierung: Lösungen für die Gesundheit Ihres Kanals und Ihr Seelenfrieden"</p>
                
                <div className="footer-social">
                    <a href="google" target='blank'><FaFacebookF /></a>
                    <a href="google" target='blank'><FaInstagram /></a>
                    <a href="google" target='blank'><FaTwitter /></a>
                    <a href="google" target='blank'><FaLinkedin /></a>
                    <a href="google" target='blank'><FaYoutube /></a>
                </div>
            </div>
            
            <div className="footer-link-box">
                <strong>Main Link's</strong>
                <ul>
                    <li><a href="#hero">Startseite</a></li>
                    <li><a href="#our-services">Unsere Dienstleistungen</a></li>
                    <li><a href="#why-choose-us">Warum wir?</a></li>
                    <li><a href="#our-team">Über uns</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
            </div>

            


            
            {/* <div className="footer-link-box">
                <strong>External Link's</strong>
                <ul>
                    <li><a href="#">Our Product's</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Term's and Condition's</a></li>
                </ul>
            </div>
            
            <div className="footer-link-box">
                <strong>External Link's</strong>
                <ul>
                    <li><a href="#">Our Product's</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Term's and Condition's</a></li>
                </ul>
            </div> */}
            
   
        </div>

        <div className="footer-bottom">
            <span className="footer-owner">Made by Arber Biljali</span>
            <span className="copyright">&#169; Copyright 2024</span>
        </div>
    </footer>
  )
}

export default Footer