 function getAPIdata() {

	// request maken met daarin de api link
	var request = 'https://api.adviceslip.com/advice';	


	// met fetch wordt het overzicht naar boven gehaald
	fetch(request)	
	
	.then(function(response) {
		return response.json();
	})
	
	// do something with response
	.then(function(response) {
		// show full JSON object
		//console.log(response);
		document.getElementById('advice').innerHTML = response.slip.advice;

	});
}

// init data stream
getAPIdata(); 


