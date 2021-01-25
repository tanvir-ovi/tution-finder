const { GurdianPanal } = require("../model/database");

const gurdianPanal = (req,res) => {
 const NewGurdianPanal = new GurdianPanal({
			subjectList:req.body.subjectList,
      tutionDayPerMonth:req.body.tutionDayPerMonth,
      class: req.body.class,
      slaryRange: req.body.slaryRange
		});
		NewGurdianPanal.save(function(err) {
			if(!err) {
				res.json("succesfully added one gurdianPanal");
			} else {
				res.json(err);
			}
		});
}

module.exports = gurdianPanal;