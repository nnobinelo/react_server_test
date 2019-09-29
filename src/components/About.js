import React from 'react'
import Rainbow from '../hoc/rainbow' //use two dots to get out of current sub folder

const About = () =>{
	return(
		<div className="container">
			<h4 className="center">About</h4>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod perspiciatis accusantium eos sapiente debitis voluptatum incidunt, quo reprehenderit tenetur nesciunt, adipisci aut aliquam sequi distinctio blanditiis delectus nobis facilis! Velit.</p>
		</div>
	)
}

export default Rainbow(About)