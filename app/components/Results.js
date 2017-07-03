var React = require('react');
const queryString = require('query-string');
const api = require('../utils/api');

class Results extends React.Component{
	constructor(props){
		super(props);

		var uri = this.props.match.params.location;
		const query = queryString.parse(uri);
		var requestLocation = encodeURI(query.location);
		this.state = {location: requestLocation,
									loading: true,
									weather: null};

	}

	componentDidMount(){		
		api.getFiveDays(this.state.location).then(function(response){
			this.setState({loading: false, 
										 weather: response.data.list});
			console.log(response.data.list);
		}.bind(this));
	}

	getDay(day){
		const day_array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		return day_array[day];
	}

	getDate(month){
		const month_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return month_array[month];
	}

	render(){

		return(
			<div>
				{this.state.loading ? (
					<p>Loading</p>
					) : (
					<ul className="weather-list">
					{this.state.weather.map(function(weather, index){
						var date = new Date(weather.dt * 1000);
						return(
							<li key={index} className="weather-item">
								<h3>{this.getDay(date.getDay()) + ", " + date.getDate() + " " + this.getDate(date.getMonth())}</h3>
							</li>
						);						
					}.bind(this))}
					</ul>	
					)}
			</div>
		)
	}
}

module.exports = Results;