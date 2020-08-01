'use strict';
const log = console.log;
log('Express server');

const express = require('express');
const path = require('path');

const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose');
mongoose.set('bufferCommands', false);

// import all mongoose models
const { CheckInItem } = require('./models/CheckInItem');
const { Notification } = require('./models/Notification');
const { ReminderItem } = require('./models/ReminderItem');
const { Reminders } = require('./models/Reminders');
const { Trends } = require('./models/Trends');
const { User } = require('./models/user');

// to validate object IDs
const { ObjectID } = require('mongodb');

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser');
app.use(bodyParser.json());

function isMongoError(error) {
  // checks for first error returned by promise rejection if Mongo database suddently disconnects
  return typeof error === 'object' && error !== null && error.name === 'MongoNetworkError';
}

//static public directory for the files in /public
app.use(express.static(__dirname + '../public'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});