const mongoose = require('mongoose');

// module this api
const UserObj = require('./userModal');


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

exports.criteriondUserEmail = function (email, colBack) {
  UserObj.findOne({ email: email }, (err, person)=>{
  colBack(err, person)
  })
}


exports.criteriondCookue = function (cookie, colBack) {
  UserObj.findOne({ 'security.keyCookie': cookie }, (err, person)=>{
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