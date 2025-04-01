import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/profile_imgg.jpg'
import resume from '../../assets/rohit kumar Resume.pdf'




const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Rohit Kumar,</span> frontend developer based in India.</h1>
      <p>I specialize in creating beautiful, interactive and responsive websites.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume} target="_blank">
            My Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
