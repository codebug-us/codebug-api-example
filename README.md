# Using our Node Backend API

### Why did we create a backend application for our API requests?

Sending API requests from our frontend applications is totally fine as long as there are no API Keys involved. The World Wide Web was built as an open space so it is possible to see the HTML, CSS, and JS files that create frontend applciations. That's great as we can see the code that runs in our browser, but not so great because if we store our API Keys in our frontend code, then everyone can see them. Therefore, we've created a simple backend Node application (Node is built with JavaScript, so when you check out the code, you'll see you can understand a lot of it already) that we can use to store our API Keys and it will add our API keys into our requests to the APIs we are using.


### Sounds complicated...

It's not that complicated. This repo has examples code for all the different ways we can interact with our backend application. 


### Types of Requests

We have 2 different request endpoints (URLs that you can send requests to) in our Node backend application. 

1. `/post` is an endpoint you'll use to send your GET and POST requests to APIs (through our backend app). It may take a little while to grasp, but you'll send all your requests to `/post` as POST requests. Inside the `data` field of the `POST` request to our backend, you'll pass in the information for your API request (whether your API request is a `GET` or `POST`). 

So the flow is like this: 

**`GET` request:**
Your JavaScript code > Codebug Node Backend Application > 3rd Party API > Responds to Codebug Node Backend Application > Backend Application returns the response to your JavaScript code. 

*You can see how to send a GET request in get_request.js*

**`POST` request:**
Your JavaScript code > Codebug Node Backend Application > 3rd Party API > Responds to Codebug Node Backend Application > Backend Application returns the response to your JavaScript code. 

*You can see how to send a POST request in post_request.js*

Notice the `GET` and `POST` requests have the same flow. You'll send all these requests to Codebug's Backend Node App as `POST` requests. 

2. `/env` is the other Codebug Backend Node App endpoint you can send requests to. This endpoint only accepts a `GET` request and allows you to pass in a `key` for one of your environment variables. Our Node Backend App then responds with the value of the environment variable. You'll need to pass the `api_key` parameter with the name of your environment variable. 

Example: 
```
http://localhost:3000/env?api_key=CODEBUG_TWITTER_API_KEY
```

*You can see how to send a GET request for an environment variable in get_environment.js*

