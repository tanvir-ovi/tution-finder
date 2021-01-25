//import database
const { UserInformation } = require('../model/database');


const handleSignUp = (req, res) => {
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
}

module.exports = handleSignUp;