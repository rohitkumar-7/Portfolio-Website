import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/about_profile.svg'
import profile_img from '../../assets/about_imgg.jpg'


const About = () => {
    
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am a frontend developer from India, specializing in crafting beautiful, interactive, and responsive websites.
                        </p>
                        <p>
                            My passion for web development began in 2022 when I took the initiative to create a website for my college fest. Since then, I've gained over a year of industry experience and have been continually honing my skills.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>TypeScript</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Material Ui</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>GIT & GitHub</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Redux Toolkit</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Node.js</p>
                            <hr style={{ width: "30%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About
