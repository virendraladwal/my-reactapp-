import React from 'react'
import './works.css'
import portfolio1 from '../Assets/work1.jpg'
import portfolio2 from '../Assets/work2.jpg'
import portfolio3 from '../Assets/work3.jpg'
import portfolio4 from '../Assets/work4.jpg'
import portfolio5 from '../Assets/work5.jpg'
import portfolio6 from '../Assets/work6.jpg'

const Works = () => {
  return (
    <section id= 'works'>
        <h2 className='workstitle'>my portfolio</h2>
        <span className='worksDesc'>
           Briefly introduce Kaka Da Dhaba, highlighting its vision, mission, and values.
           Describe the concept behind the restaurant, such as its focus on traditional Indian 
           cuisine with a modern twist or its commitment to using fresh, locally sourced ingredients.
        </span>

        <div>
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