import React from 'react'
import './whyChooseUs.css'
import { FaWrench, FaTools, FaHammer, FaHandshake, FaWhatsapp, FaViber } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";


function WhyChooseUs() {
  return (
    <section id="why-choose-us">

        <div className="why-choose-us-left">
            <h3>Why Choose Us?</h3>
            <div className="why-choose-box-container">
                <div className="why-choose-box">
                    <i><FaWrench /></i>
                    <div className="why-choose-box-text">
                        <strong>Expertise and Experience</strong>
                    </div>
                </div>
                
                <div className="why-choose-box">
                    <i><FaTools /></i>
                    <div className="why-choose-box-text">
                        <strong>Cutting-Edge Technology</strong>
                    </div>
                </div>
                
                <div className="why-choose-box">
                    <i><FaHammer /></i>
                    <div className="why-choose-box-text">
                        <strong>Prompt and Reliable Service</strong>
                    </div>
                </div>
                
                <div className="why-choose-box">
                    <i><FaHandshake /></i>
                    <div className="why-choose-box-text">
                        <strong>Customer Satisfaction Guarantee</strong>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="why-choose-us-right">
            <h3>Emergency Call</h3>
            <div className="w-right-contact-container">
                <div className="w-right-contact-box">
                    <i><BsTelephone /></i>
                    <div className="w-right-contact-box-text">
                        <span>Call Us Now</span>
                        <a href="tel:+123456789" target='_blank' data-rel="external" rel="noreferrer">+123 4567 89</a>
                    </div>
                </div>
                
                <div className="w-right-contact-box">
                    <i><FaWhatsapp /></i>
                    <div className="w-right-contact-box-text">
                        <span>WhatsApp</span>
                        <a href="https://api.whatsapp.com/send?phone+123456789" target='_blank' rel="noreferrer">+123456789</a>
                    </div>
                </div>
                
                <div className="w-right-contact-box">
                    <i><RiMessengerLine /></i>
                    <div className="w-right-contact-box-text">
                        <span>Messenger</span>
                        <a href="https://m.me/Name" target='_blank' rel="noreferrer">Send a message</a>
                    </div>
                </div>
                
                <div className="w-right-contact-box">
                    <i><FaViber /></i>
                    <div className="w-right-contact-box-text">
                        <span>Viber</span>
                        <a href="viber://chat?number=+123456789" target='_blank' rel="noreferrer">+123456789</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default WhyChooseUs