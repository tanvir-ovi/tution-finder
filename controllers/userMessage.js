const { UserMessage } = require("../model/database");

const userMessages = (req,res) => {
 const NewUserMessages = new UserMessage({
			user_id:req.body.user_id,
      user_sent_id: req.body.user_sent_id,
			message:req.body.message
		});
		NewUserMessages.save(function(err) {
			if(!err) {
				res.json("succesfully added one UserMessages");
			} else {
				res.json(err);
			}
		});
}


module.exports = userMessages;