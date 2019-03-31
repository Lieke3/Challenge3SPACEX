 function getAPIdata() {

	// request maken met daarin de api link
	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=b0c8dafa512a0134e90df6ece3c2b7a2&q=the%20Hague,nl';	


	// met fetch wordt het overzicht naar boven gehaald
	fetch(request)	
	
	.then(function(response) {
		return response.json();
	})
	
	.then(function(response) {
		//console.log(response);
		var temp = parseFloat(response.main.temp-273.15).toFixed(0);
		//var rain = parseFloat(response.rain.3h).toFixed(1);
		document.getElementById('weather').innerHTML = 'It will be around '  +temp +'°C today in The Hague.';

	});
}

// init data stream
getAPIdata();