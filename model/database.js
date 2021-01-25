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
  Subject:String,
});
const UserDetail = mongoose.model('UserDetail', userDetailsSchema);


module.exports = {
  UserInformation,
  UserDetail
}