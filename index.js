const express = require("express");
const path = require('path');
const app = express();
const db = require("./src/config/db");
require('dotenv').config();


const cookieParser = require('cookie-parser');
const logger = require("morgan");


const adminRoute = require("./src/routes");
const port = 4200;


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'src/views'));


app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src/public")));
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);

  res.send({ "message": "404 Page Not Found..!" });

  // res.render('error');
});


app.use('/', adminRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})