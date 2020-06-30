const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

const hbs = require('hbs');
const path = require('path');

//set up body parser
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to mongodb
mongoose.connect('mongodb+srv://CodeExam:CodeExam@coding-exam-yc46f.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.Promise = global.Promise;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/assets', express.static(__dirname + '/public'));

//use the routes
app.use('/', routes);

//error handling
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

//listen for requests
app.listen(4000, function(){
    console.log("Server is listening on port 4000");
});