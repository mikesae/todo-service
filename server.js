const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./api/models/list-model');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//register the route
const routes = require('./api/routes/list-routes');
routes(app);


app.listen(port);

app.use((req, res) => res.status(404).send({url: req.originalUrl + ' not found'}));

console.log('todo list RESTful API server started on: ' + port);