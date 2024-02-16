import React, { Component } from 'react'
import './skill.css'
import UIDESING from '../Assets/skill1.png'
import WEBDESING  from '../Assets/skill2.png.png'
import APPDESING  from '../Assets/skill3.png'
import FOODDESING  from '../Assets/slill4.png'


export class Skill extends Component {
  render() {
    return (
      <section id='skills' >
				<span className='skillTitle'> Restaurant Specialties</span>
				<span className='skillDesc'>Kaka Da Dhaba is not just a restaurant; it's a culinary oasis where every dish tells a story of tradition, passion,
				 and authenticity. With its warm ambiance and welcoming atmosphere, stepping into Kaka Da Dhaba is like being embraced by the rich tapestry of 
				 Indian culture and hospitality.
				</span>
       <div className='skillBars'>
         <div className='skillBar'>
						<img src={UIDESING} alt="UIdesing" className="skillBarImg" />
						<div className="skillBarText">
							<h2>Tandoori Delights</h2>
							<p>Indulge in our authentic Tandoori dishes, such as Tandoori Chicken, Seekh Kebabs, 
							and Tandoori Fish, marinated in aromatic spices and cooked to perfection in our traditional clay oven.</p>
						</div>
				 </div>

				 <div className='skillBar'>
						<img src={WEBDESING} alt="WEBdesing" className="skillBarImg" />
						<div className="skillBarText">
							<h2>Tandoori Fish Tikka:</h2>
							<p>Fresh fish fillets, marinated in a blend of yogurt, ginger, garlic, lime juice, and aromatic
								 spices such as cumin, coriander, and red chili powder.</p>
						</div>
				 </div>

				 <div className='skillBar'>
						<img src={APPDESING} alt="AppDesing" className="skillBarImg" />
						<div className="skillBarText">
							<h2>Vegetarian Extravaganza: Paneer Specialties</h2>
							<p>Enjoy our range of paneer dishes, including Paneer Tikka Masala, Palak Paneer, and Kadai Paneer, 
								showcasing the versatility of this beloved Indian cheese in various flavorful gravies.</p>
						</div>
				 </div>

				 <div className='skillBar'>
						<img src={FOODDESING} alt="AppDesing" className="skillBarImg" />
						<div className="skillBarText">
							<h2>Family Dining Experience</h2>
							<p>At Kaka Da Dhaba, we pride ourselves on offering a warm and welcoming atmosphere where
								 families and friends can gather to enjoy delicious food, attentive service, and memorable dining experiences.</p>
						</div>
				 </div>
			 </div>
      </section>
    )
  }
}

export default Skill