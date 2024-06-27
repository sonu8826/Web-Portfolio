var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var validateRouter = require('./routes/LOGINvALIDATION'); // Doubt Here
var productRouter = require("./routes/getProductDetails");
var signupRouter = require('./routes/signupUserDetails');
var addNewProductRouter = require("./routes/addNewProduct");
var uploadImage = require("./routes/uploadImages");
var session = require("express-session")
var checkUserLoginRouter = require("./routes/isUserLoggedin")
var logoutUser = require("./routes/logoutSession");
const { Socket } = require('dgram');
var express = require('express');
var app = express();
const Server = require('http').createServer(app);
const io = require('socket.io')(Server);


io.on('connection', (socket) => {
  total++;
  console.log("*User Online");

  socket.on('Disconected', function (){
    console.log("user got disconnected");
  })
})


app.use(session({
  secret: 'keyboard cat',
  // resave: false,
  // saveUninitialized: true,
  // originalMaxAge:300000,
  cookie: { secure: false }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/validate/userCredentials", validateRouter);
app.use("/load/productDetails", productRouter);
app.use("/newUser/signup",signupRouter);
app.use("/add/newProductDetails", addNewProductRouter);
app.use("/add/product/image", uploadImage);
app.use("/check/userLogin",checkUserLoginRouter);
app.use("/logout/user",logoutUser);


app.listen(5000, function() {
  console.log("Server is running on port 5000");
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); 
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

module.exports = app;
