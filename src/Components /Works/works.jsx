import React from 'react'
import './works.css'

import portfolio1 from '../Assets/work1.webp'
import portfolio2 from '../Assets/work2.webp'
import portfolio3 from '../Assets/work3.webp'
import portfolio4 from '../Assets/work4.webp'
import portfolio5 from '../Assets/work5.webp'
import portfolio6 from '../Assets/work6.webp'

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>
           Briefly introduce Kaka Da Dhaba,<br/> 
           highlighting its vision, mission, and values.Describe<br/> 
           Describe the concept behind the restaurant, such as its focus on traditional Indian <br/> 
           cuisine with a modern twist or its commitment to using fresh,<br/>  locally sourced ingredients.
        </span>

        <div className='worksImgs'>
         <img src={portfolio1} alt="" className='worksImg' />
         <img src={portfolio2} alt="" className='worksImg' />
         <img src={portfolio3} alt="" className='worksImg' />
         <img src={portfolio4} alt="" className='worksImg' />
         <img src={portfolio5} alt="" className='worksImg' />
         <img src={portfolio6} alt="" className='worksImg' />
        </div>
    </section>
  )
}

export default Works