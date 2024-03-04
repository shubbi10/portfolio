import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/shubham-kumar-b5b302223/' target='_blank' rel='noreferrer'><FaLinkedin/></a>
        <a href='https://github.com/shubbi10' target='_blank' rel='noreferrer'><FaSquareGithub/></a>
    </div>
  )
}

export default HeaderSocials