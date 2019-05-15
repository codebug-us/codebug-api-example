$(document).ready(function(){
	var apiEndpoint = "http://localhost:3000/post";
	// var apiEndpoint = "https://codebug-api.herokuapp.com/post";
	var foursquare = "https://api.foursquare.com/v2/venues/explore?client_id=CODEBUG_FOURSQUARE_CLIENT_ID&client_secret=CODEBUG_FOURSQUARE_CLIENT_SECRET&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee"

	var apiPostRequestInfo = {
		"apiUrl": "https://api.airtable.com/v0/appYaDVKtU7ztv5a4/peeps",
		"apiMethod": "POST",
		"apiHeaders": {
			"Content-Type": "application/json",
			"Authorization": "CODEBUG_AIRTABLE_API_HEADER"
		},
		"apiData": {
			"fields": {
				"name": "McArthur Gill AUTH",
				"title": "Cofounder @ Codebug",
				"personalWebsite": "https://www.codebug.us"
			}
		}
	}

	var foursquareInfo = {
		"apiUrl": foursquare,
		"apiMethod": "POST"
	}

	$("#post-request").click(function(event){
		var postRequest = $.ajax({
			url: apiEndpoint,
			method: "POST",
			data: foursquareInfo,
		});

		postRequest.done(function(response){
			console.log("Response: ", response);
		});
	});

});