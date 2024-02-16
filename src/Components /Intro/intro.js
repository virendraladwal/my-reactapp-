import React from 'react';
import './intro.css';
import bg from '../Assets/restro.jpg';
import btnImg from '../Assets/aaaaa.png';
import { Link } from "react-scroll"

const Intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
        <span className='hello'>7Star</span>
        <span className='introText'>Kaka Da 
          <span className='introName'>Dhaba</span><br/> Restaurant
        </span>
        <p className='intropara'>"aka Da Dhaba is not just a restaurant; <br/>
        it's a culinary oasis where every dish tells a story of tradition, <br/>
        passion, and authenticity. With its warm ambiance and welcoming atmosphere, <br/>
        stepping into Kaka Da Dhaba is like being embraced by <br/>
        the rich tapestry of Indian <br/>
        culture and hospitality.<br/>
        </p>
         <Link to="section-to-scroll" smooth={true} duration={500}><button className='btn'><img src={btnImg} alt="click" className='btnImg'/>click</button></Link>
      </div>
     <img src={bg} alt="" className="bg"/>
    </section>
  )
}

export default Intro; 