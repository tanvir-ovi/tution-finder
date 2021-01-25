const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//import routes
const handleSignUp = require('./controllers/signup');
const userDetails = require('./controllers/userDetails');

//Database connection
mongoose.set( 'useUnifiedTopology', 'true' );
mongoose.set('useFindAndModify', 'true');
mongoose.connect('mongodb://localhost:27017/tutionfinderDB',{useNewUrlParser:true});

app.post("/api/signup", (req, res) =>  handleSignUp(req, res));

app.post("/api/userdetail", (req, res) => userDetails(req,res))
  
app.listen(3000,
  () => console.log("app is running on port 3000")
);