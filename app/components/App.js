var React = require('react');
var MainText = require('./MainText');
var SearchLocationForm = require('./SearchLocationForm')

function App(props){
	return (
		<div>
			<MainText/>
			<SearchLocationForm/>
		</div>
	)
}

module.exports = App;