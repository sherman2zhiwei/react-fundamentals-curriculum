var React = require('react');
var MainText = require('./MainText');
var SearchLocationForm = require('./SearchLocationForm')
var Navbar = require('./Navbar');

function App(props){
	return (
		<div className="main-page">
			<Navbar/>
			<MainText/>
			<SearchLocationForm/>
		</div>
	)
}

module.exports = App;