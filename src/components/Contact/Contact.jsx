import React from 'react'
import "./contact.css";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nvjq215', 'template_2hxa44i', form.current, {
        publicKey: 'TUpD0-qyXaj5U9A-F',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdConnectWithoutContact className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>messishubbi7@gmail.com</h5>
            <a href='mailto:messishubbi7@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatAspp</h4>
            <h5>+919453805255</h5>
            <a href='https://api.whatsapp.com/send?phone=+919453805255'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message'rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;