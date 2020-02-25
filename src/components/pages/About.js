import React from 'react'

function About() {
	return (
		// React Fragment is a non dom entry item, ie need to do something but not show on page
		<React.Fragment>
			<h1>About</h1>
			<p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
		</React.Fragment>
	)
}

export default About;