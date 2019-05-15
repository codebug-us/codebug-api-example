$(document).ready(function(){
	var apiEndpoint = "http://localhost:3000/post";
	// var apiEndpoint = "https://codebug-api.herokuapp.com/post";

	var apiGetRequestData = {
		"apiUrl": "https://api.airtable.com/v0/appYaDVKtU7ztv5a4/peeps?maxRecords=3&view=Grid%20view&api_key=CODEBUG_AIRTABLE_API_KEY",
		"apiMethod": "GET",
	}

	$("#get-request").click(function(event){
		var postRequest = $.ajax({
			url: apiEndpoint,
			method: "POST",
			data: apiGetRequestData,
		});

		postRequest.done(function(response){
			console.log("Response: ", response);
		});
	});

});