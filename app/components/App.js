var React = require('react');
var MainText = require('./MainText');
var SearchLocationForm = require('./SearchLocationForm')
var Navbar = require('./Navbar');
var Results = require('./Results');
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {submitValue: "", submitted: false};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(location){
		this.setState({submitValue: location});
	}

	handleSubmit(location){
		var query = "?location=" + location;
		var uri = encodeURI(query);
		this.setState({submitted: true,
									 uri: uri});
	}

	render(){
		return (
			<Router>
				<div className="main-page">

					<Navbar value={this.state.submitValue}
									onChange={this.handleChange}
									onSubmit={this.handleSubmit}/>
					{!this.state.submitted ? (
					<div>
						<Route exact path="/" render={props => (
							<div>
								<MainText />
								<SearchLocationForm value={this.state.submitValue}
																		onChange={this.handleChange}
																		onSubmit={this.handleSubmit}/>
							</div>
							)
							}/>
					</div>
					) : (
					<Redirect to={{
						pathname: '/forecast/' + this.state.uri,
						state: { from: this.props.location }
					}}/>
					)}

					<Route path="/forecast/:location" component = {Results}/>
				</div>

			</Router>
		)
	}

}

module.exports = App;