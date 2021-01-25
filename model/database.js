const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create userInformationSchema
const userInformationSchema = Schema({
	userName:String,
  name: String,
  type:String
});

const UserInformation = mongoose.model('UserInformation', userInformationSchema);

// create userDetailsSchema
const userDetailsSchema = Schema({
	education:String,
  experience: String,
  bio:String,
  skills:String,
  subject:String,
});
const UserDetail = mongoose.model('UserDetail', userDetailsSchema);

// create userMessagesSchema
const userMessagesSchema = Schema({
	user_id: String,
  user_sent_id: String,
  message: String
});
const UserMessage = mongoose.model('UserMessage', userMessagesSchema);

// create gurdianPanalSchema
const gurdianPanalSchema = Schema({
	subjectList: String,
  tutionDayPerMonth: Number,
  class: Number,
  slaryRange: String
});
const GurdianPanal = mongoose.model('GurdianPanal', gurdianPanalSchema);


module.exports = {
  UserInformation,
  UserDetail,
  UserMessage,
  GurdianPanal
}