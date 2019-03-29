const mongoose = require('mongoose');

// module this api
const UserObj = require('./userModal');

// mongoose.connect(' mongodb://127.0.0.1:27017/userDB', { useNewUrlParser: true });

exports.find = function (colBack) {
  UserObj.find((err, doc)=>{
  colBack(err, doc)
  })
}

exports.findId = function (id, colBack) {
  UserObj.find({_id: id}, (err, doc)=>{
  colBack(err, doc)
  })
}

exports.criteriondUser = function (criteriondUser, colBack) {
  UserObj.findOne({ "contact.email": criteriondUser }, (err, person)=>{
  colBack(err, person)
  })
}

exports.save = function (newUser, colBack) {
  let userObj = new UserObj(newUser);
  userObj.save((err, doc)=>{
    colBack(err, doc)
  })
}

exports.findOneAndUpdate = function (id, update, colBack) {
	UserObj.findOneAndUpdate({_id: id}, update, { "new": true},  (err, doc)=>{
  	  colBack(err, doc)
  })
}

exports.findOneAndDelete = function (id, colBack) {
	UserObj.findOneAndDelete({_id: id}, (err, doc)=>{
  	  colBack(err, doc)
  })
}