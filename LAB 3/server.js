// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup server
const port = 5500;
const server = app.listen(port, listening);

function listening(){ 
    console.log("server running"); 
    console.log(`running on localhost: ${port}`); 
}

// Respond with JS object when a GET request is made to the homepage
app.get('/all', getData);

function getData(req, res) {
    res.json(projectData);
};

// POST method route
app.post('/addWeather', addWeather);

function addWeather (req, res) {
    const data = req.body;
    projectData.temp = data.temp;
    projectData.date = data.date;
    projectData.userResponse = data.userResponse;
}
