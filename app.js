require('dotenv').config();

var express = require('express');
// const mongoose = require('mongoose')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();
const cors = require('cors');

app.use(cors());

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log('Successfully connected to database.');
//   })
//   .catch(err => console.error(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// const scheduleTask = require('./controllers/schedular');
// scheduleTask();

app.use('/', indexRouter);

module.exports = app;