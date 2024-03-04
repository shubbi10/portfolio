import React from 'react'
import "./about.css";
import aboutme from "../../assets/aboutme.jpg";
import { FaAward } from "react-icons/fa6";
import { GiFullFolder } from "react-icons/gi";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={aboutme} alt='about' />
          </div>
          </div>
          
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>fresher</small></article>
                <article className='about__card'>
                <GiFullFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>1+ Completed</small></article>

                <p>I am a loyal and trustworthy employee who can work alone or as part of a team. I am a quick to learn and willing to adapt to any job. I am a competent, loyal, hard working employee with the ability to achieve tasks when working alone or as part of a team. I am punctual with an excellent attendance record</p>
                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div></div></div></section>
  )
}

export default About;

