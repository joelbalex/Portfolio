import React from 'react';
import "./About.css";
import htmlImg from '../../assets/html.png';
import jsImg from '../../assets/js.png';
import reactImg from '../../assets/reactimg.png';
import cssImg from '../../assets/cssimg.png';

function About() {
  return (
    <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className='skillDesc'>As a full-stack web developer, I am proficient in HTML5, CSS, ReactJS, and JavaScript. I have experience building responsive and dynamic web applications, leveraging modern front-end technologies to deliver seamless user experiences. My expertise spans from crafting clean and efficient code to ensuring optimized performance and scalability in web development projects.</span>
    <div className="skillBars">
        <div className="skillBar">
            <img src={htmlImg} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>HTML 5</h2>
                <p className='para'>Proficient in HTML5, with a strong ability to structure and create accessible, semantic web content.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={jsImg} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>JavaScript</h2>
                <p className='para'>Skilled in JavaScript, with expertise in building dynamic, interactive web applications and optimizing performance on the client-side.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={reactImg} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>React.Js</h2>
                <p className='para'>Experienced in ReactJS, skilled in building scalable, component-based user interfaces with efficient state management.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={cssImg} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>CSS</h2>
                <p className='para'>Proficient in CSS, adept at designing responsive and visually appealing web interfaces with a strong focus on user experience.</p>
            </div>
        </div>
    </div>
    
    </section>
  )
}

export default About