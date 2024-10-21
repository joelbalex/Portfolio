import React from 'react';
import './Works.css';
import wed from '../../assets/wedding.png';
import travel from '../../assets/travel.png';
import food from '../../assets/food.png';

function Works() {
  return (
    <section id="works">
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure my work is pixel perfect. I am excited to bring my skills and experience to help buisnessess achieve their goals and create a strong online presence.</span>
        <div className="worksImgs">
            
<div class="card">
  <img src={wed} className='worksImg'/>
  <div class="card__content">
    <p class="card__title">Melodia Event Managment</p>
    <p class="card__description">An wedding event booking website that I had the privilege of leading as part of a team project!<br /> <br /><a href="https://joelbalex.github.io/event/" className='projBtn'>View Project</a></p>
  </div>
</div>

<div class="card">
  <img src={travel} className='worksImg'/>
  <div class="card__content">
    <p class="card__title">World Travel Guy</p>
    <p class="card__description">A clone of the website 'The World Travel Guy' which is a travel blog website.<br /> <br /><a href="https://joelbalex.github.io/Travel/" className='projBtn'>View Project</a>.</p>
  </div>
</div>

<div class="card">
  <img src={food} className='worksImg'/>
  <div class="card__content">
    <p class="card__title">Everyday Eats</p>
    <p class="card__description">A Food Ordering website built with HTML, CSS, and Bootstrap!
        <br /><br /><a href="https://joelbalex.github.io/food/" className='projBtn'>View Project</a>
    </p>
  </div>
</div>

</div>
<button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works