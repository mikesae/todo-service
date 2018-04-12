const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./api/models/todoListModel');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use((req, res) => res.status(404).send({url: req.originalUrl + ' not found'}));

console.log('todo list RESTful API server started on: ' + port);