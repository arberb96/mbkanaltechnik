import React from 'react'
import './contact.css'
import { FaWhatsapp, FaPhone, FaFax } from "react-icons/fa";

function Contact() {
  const mapSrc = `https://www.google.com/maps?q=YOUR_COORDINATES_HERE&output=embed`;

  
  return (
    <section id='contact'>
      <h2>Kontaktiere mich</h2>

      <div className="container contact__container">
      <div className="contact__left">
          <div className="contact__info">
          <article className='contact__option'>
              <FaPhone size={16}/>
              <h5>Telefon</h5>
              <a className="contact-link" href="tel:+123456789" target='_blank' data-rel="external" rel="noreferrer">+123456789</a>
            </article>
            <article className='contact__option'>
              <FaFax size={16}/>
              <h5>Fax</h5>
              <a className="contact-link" href="tel:+123456789" target='_blank' data-rel="external" rel="noreferrer">+123456789</a>
            </article>
            <article className='contact__option'>
              <FaWhatsapp size={16}/>
              <h5>WhatsApp</h5>
              <a className="contact-link" href="https://api.whatsapp.com/send?phone+123456789" target='_blank' rel="noreferrer">+123456789</a>
            </article>
          </div>
          <div className="contact__address-map">
            <p className="contact__address">Musterstraße 123
                                            12345 Musterstadt
                                            Deutschland</p>
            <iframe className="contact__map" src={mapSrc} allowFullScreen="" loading="lazy" title='Map'></iframe>
          </div>
        </div>
        
        <form className='form'>
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