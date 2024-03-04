import React from 'react'
import "./experience.css";
import { IoCheckmarkCircle } from "react-icons/io5";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <IoCheckmarkCircle />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <IoCheckmarkCircle />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <IoCheckmarkCircle />
              <h4>REACT</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <IoCheckmarkCircle />
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Experienced</small>
            </article>

          </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <IoCheckmarkCircle />
              <h4>EXPRESS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <IoCheckmarkCircle />
              <h4>NODE</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <IoCheckmarkCircle />
              <h4>MONGO DB</h4>
              <small className='text-light'>Experienced</small>
            </article>

          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience;