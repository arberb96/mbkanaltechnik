import React from 'react'
import './contact.css'
import { FaWhatsapp, FaPhone, FaFax } from "react-icons/fa";

import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const mapSrc = `https://www.google.com/maps?q=47.3283907,8.5131127,Leimbachstrasse+153+8041+Zürich+Switzerland&output=embed`;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u93fhil', 'template_ee7wote', form.current, 'sfJWneyGfeqae5XtR')

    e.target.reset()
    
  };
  
  return (
    <section id='contact'>
      <h2>Kontaktiere mich</h2>

      <div className="container contact__container">
      <div className="contact__left">
          <div className="contact__info">
          <article className='contact__option'>
              <FaPhone size={16}/>
              <h5>Telefon</h5>
              <a className="contact-link" href="tel:079-210-40-40" target='_blank' data-rel="external" rel="noreferrer">079-210-40-40</a>
            </article>
            <article className='contact__option'>
              <FaFax size={16}/>
              <h5>Fax</h5>
              <a className="contact-link" href="tel:044-840-00-25" target='_blank' data-rel="external" rel="noreferrer">044-840-00-25</a>
            </article>
            <article className='contact__option'>
              <FaWhatsapp size={16}/>
              <h5>WhatsApp</h5>
              <a className="contact-link" href="https://api.whatsapp.com/send?phone=079-210-40-40" target='_blank' rel="noreferrer">079-210-40-40</a>
            </article>
          </div>
          <div className="contact__address-map">
            <p className="contact__address">Leimbachstrasse 153 8041 Zürich</p>
            <iframe className="contact__map" src={mapSrc} allowFullScreen="" loading="lazy" title='Map'></iframe>
          </div>
        </div>
        
        <form className='form' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Ihr vollständiger Name' required/>
          <input type="email" name='email' placeholder='Ihre E-Mail' required/>
          <textarea name="message" rows="7" placeholder='Ihre Nachricht' required></textarea>
          <button type='submit' className='btn btn-primary'>Nachricht senden</button>
        </form>
      </div>
    </section>
  )
}

export default Contact