$(document).ready(function(){
	var getEnvironmentVariableEndpoint = "http://localhost:3000/env?api_key=";
	// var getEnvironmentVariableEndpoint = "https://codebug-api.herokuapp.com/env?api_key=";

	$("#get-environment-variable").click(function(){
		// Send a request to GET the value of your environment variable 
		// We're sending a GET request to our backend
		var getEnvRequest = $.ajax({
			url: getEnvironmentVariableEndpoint + "CODEBUG_UNSPLASH_API_KEY",
			method: "GET"
		});

		getEnvRequest.done(function(response){
			console.log("Response: ", response);
		});
	});

});