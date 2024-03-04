import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Shubham's Portfolio</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__copyright'>
        <small>&copy; Shubham's Portfolio. All Rights Reserved.</small>
      </div>

    
    </footer>
  )
}

export default Footer;