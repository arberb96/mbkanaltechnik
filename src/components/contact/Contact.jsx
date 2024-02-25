import React from 'react'
import './contact.css'
import { FaRegEnvelope, FaWhatsapp, FaViber, FaFacebookMessenger } from "react-icons/fa";

function Contact() {
  return (
    <section id='contact'>
      <h2>Kontaktiere mich</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <FaRegEnvelope size={16}/>
            <h5>Email</h5>
            {/* <h6>Admin.admin@gmail.com</h6> */}
            <a className="contact-link" href="mailto:admin.admin@gmail.com" target='_blank' rel="noreferrer">Admin.admin@gmail.com</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger size={16}/>
            <h5>Messenger</h5> 
            {/* <h6>Admin Admin</h6> */}
            <a className="contact-link" href="https://m.me/Admin" target='_blank' rel="noreferrer">Admin Admin</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp size={16}/>
            <h5>WhatsApp</h5>
            {/* <h6>+123456789</h6> */}
            <a className="contact-link" href="https://api.whatsapp.com/send?phone+123456789" target='_blank' rel="noreferrer">+123456789</a>
          </article>
          <article className='contact__option'>
            <FaViber size={16}/>
            <h5>Viber</h5>
            {/* <h6>+123456789</h6> */}
            <a className="contact-link" href="viber://chat?number=+123456789" target='_blank' rel="noreferrer">+123456789</a>
          </article>
        </div> 
        
        <form>
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