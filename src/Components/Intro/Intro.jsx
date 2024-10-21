import React from 'react';
import './Intro.css';
import bg from '../../assets/bgImg.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
<span className="hello">Hello</span>
<span className="introText"> I'm <span className="introName">Joel Biji Alex</span> <br />Full-Stack Developer</span>
<p className="introPara">Full-stack developer with expertise in both front-end and back-end technologies, capable of designing and developing complete, dynamic web applications from concept to deployment.</p>
<a href="https://pink-judi-21.tiiny.site/"><button className='btn'><img src={btnImg} alt="" className='btnImg' />Hire Me</button></a>
        </div>
        <img src={bg} alt="" className='bg' />
    </section>
  )
}

export default Intro