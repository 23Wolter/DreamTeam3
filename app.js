const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const google = require('googleapis');
const drive = google.drive('v3'); // store Google Drive API in variable
const GoogleAuth = require('google-auth-library');
const authFactory = new GoogleAuth();
process.env.GOOGLE_APPLICATION_CREDENTIALS = './google-apis-key.json'; // store Google APIs authentication credentials in OS environment variable



// Database Connection
mongoose.createConnection('mongodb://server:SebastianGiverKage@ds115625.mlab.com:15625/opteksem3');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function () {
    console.log("Database connection established!");
});


// Google API connection
authFactory.getApplicationDefault(function(err, authClient) {
  if (err) {
    console.log('Authentication failed because of ', err);
    return;
  }

  if (authClient.createScopedRequired && authClient.createScopedRequired()) {
    const scopes = ['https://www.googleapis.com/auth/drive']; // ask for Google Drive API access
    authClient = authClient.createScoped(scopes);
  }

  // const request = {
  //   // TODO: Change placeholders below to values for parameters to the 'get' method:
  //
  //   // Identifies the project addressed by this request.
  //   project: "",
  //   // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
  //   managedZone: "",
  //   // The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
  //   changeId: "",
  //   // Auth client
  //   auth: authClient
  // };
});


// create Express REST app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));


// Require routes
const index = require('./routes/index');
const users = require('./routes/users');
const courses = require('./routes/courses');

app.use('/', index);
app.use('/users', users);
app.use('/course', courses);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// console.log("ENVIROMENT VARIABLE \n");
// console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
// console.log("\n");

module.exports = app;
