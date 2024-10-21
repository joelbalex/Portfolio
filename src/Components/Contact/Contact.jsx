import React from 'react'
import './Contact.css'
import fb from '../../assets/facebook-icon.png';
import twit from '../../assets/twitter.png';
import github from '../../assets/github.png';
import lin from '../../assets/link.png';
function Contact() {
  return (
    <section id="contactPage">
        <div id="contact">
<h1 className="contactPageTitle">Contact Me</h1>
<span className="contactDesc">Please fill out the form below to discuss any work oppurtunities</span>
<form action="" className="contactForm">
    <input type="text" className='name' placeholder='Your Name' />
    <input type="email" className='email' placeholder='Your Email' />
    <textarea name="message" rows="5" className='msg' placeholder='Your Message'></textarea>
    <button type='submit' value='Send' className="submitBtn">Submit</button>
    <div className="links">
        <a href="https://www.facebook.com/login/"><img src={fb} alt="" className="link" /></a>
        <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"><img src={twit} alt="" className="link" /></a>
        <a href="https://github.com/joelbalex?tab=repositories"><img src={github} alt="" className="link" /></a>
        <a href="https://www.linkedin.com/in/joel-biji-alex-101aa720a/"><img src={lin} alt="" className="link" /></a>
    </div>
</form>
        </div>
    </section>
  )
}

export default Contact