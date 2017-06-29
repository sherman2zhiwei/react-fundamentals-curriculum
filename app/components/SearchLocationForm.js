var React = require('react');

module.exports = function SearchLocationForm(props){
	return(
		<div>
			<form id="form" style={{
				display: 'flex',
				flexDirection: props.orientation}}>
				<input className="text-box" name="location" type="text" placeholder="St. George, Utah"></input>
				<br/>
				<input className="submit-button" type="submit" value="Get Weather"></input>
			</form>
		</div>
	)
};