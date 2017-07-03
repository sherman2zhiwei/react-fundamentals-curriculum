var axios = require('axios');
var apiKey = "b17e55f9ffc8f938e0afec6285c596a2";


function getOneDay(location){
	return axios({url: 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&type=accurate&APPID=' + apiKey, method: 'get', baseURL: ''});
};

function getFiveDays(location){
	return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + "&APPID=" + apiKey + "&cnt=5&type=accurate");
};

module.exports = {getOneDay, getFiveDays};