import React from 'react'
import './nav.css'
import { FcAbout } from "react-icons/fc";
import { IoMdContacts } from "react-icons/io";
import { GrUserExpert } from "react-icons/gr";
import { FaHome } from "react-icons/fa";

const nav = () => {
  return (
    <nav>
       <a href='#' className='active'><FaHome/></a>
       <a href='#about'><FcAbout/></a>
       <a href='#contact'><IoMdContacts/></a>
       <a href='#experience'><GrUserExpert/></a>
    
    </nav>
  )
}

export default nav