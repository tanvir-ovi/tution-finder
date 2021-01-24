const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set( 'useUnifiedTopology', 'true' );
mongoose.set('useFindAndModify', 'true');
mongoose.connect('mongodb://localhost:27017/tutionfinderDB',{useNewUrlParser:true});

const userInformation = [];

const userInformationSchema = {
	userName:String,
  name: String,
  type:String
};

const UserInformation = mongoose.model('UserInformation',userInformationSchema);

app.route("/api/signup")
  .get((req, res) => {
    UserInformation.find({}, function(err,foundUser) {
			if(!err) {
				res.json(foundUser);
			} else{
				res.json(err);
			}
		});
  })
  .post((req, res) => {
    const newUserInformation = new UserInformation({
			userName:req.body.userName,
      name: req.body.name,
			type:req.body.type
		});
		newUserInformation.save(function(err) {
			if(!err) {
				res.json("succesfully added one userInformation");
			} else {
				res.json(err);
			}
		});
  })

app.listen(3000,
  () => console.log("app is running on port 3000")
);