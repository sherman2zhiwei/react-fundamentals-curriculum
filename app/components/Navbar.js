var React = require('react');
var SearchLocationForm = require('./SearchLocationForm');

module.exports = function Navbar(props){
	return(
		<div className="navbar">
			<h1>Clever Title</h1>
			<SearchLocationForm orientation="row"/>
		</div>
	)
};
