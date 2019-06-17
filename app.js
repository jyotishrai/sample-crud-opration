//main file app.js

const express = require ("express");
const bodyParser= require ("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
//import route class in app.js

const route = require ("./route/route");

app.use('/crud', route);

// initialize our express app


let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});