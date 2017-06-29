var React = require('react');

class SearchLocationForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
	}

	handleChange(event){
		this.setState({value: event.target.value});
	}

	render(){
		return(
			<div>
				<form id="form" onSubmit={this.handleSubmit} style={{
					display: 'flex',
					flexDirection: this.props.orientation}}>
					<input className="text-box" name="location" type="text" placeholder="St. George, Utah" value={this.state.value} onChange={this.handleChange}></input>
					<br/>
					<input className="submit-button" type="submit" value="Get Weather"></input>
				</form>
			</div>
		)
	}
};

module.exports = SearchLocationForm;