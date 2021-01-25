const { UserDetail } = require("../model/database")

const userDetails = (req,res) => {
 const NewUserDetails = new UserDetail({
			education:req.body.education,
      experience: req.body.experience,
			bio:req.body.bio,
			skills:req.body.skills,
			Subject:req.body.Subject,
		});
		NewUserDetails.save(function(err) {
			if(!err) {
				res.json("succesfully added one UserDetails");
			} else {
				res.json(err);
			}
		});
}


module.exports = userDetails;