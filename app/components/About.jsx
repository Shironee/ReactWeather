var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>React Weather Application</p>
			<p>Tools used to this application:</p>
			<ul>
				<li><a href="https://facebook.github.io/react">React</a> - Javascript framework used.</li>
				<li><a href="http://openweathermap.org">Open Weather Map</a> - Open Weather Map API.</li>
			</ul>
		</div>
		
	)
};

module.exports = About;