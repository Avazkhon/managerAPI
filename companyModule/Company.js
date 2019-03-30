const mongoose = require('mongoose');

// module this api
const CompanyObj = require('./companyModal');

exports.find = function (colBack) {
  CompanyObj.find((err, doc)=>{
  colBack(err, doc)
  })
}

exports.save = function (newCompany, colBack) {
  let companyObj = new CompanyObj(newCompany);
  companyObj.save((err, doc)=>{
    colBack(err, doc)
  })
}

exports.findOneAndUpdate = function (id, update, colBack) {
  CompanyObj.findOneAndUpdate({_id: id}, update, {"new": true}, (err, doc)=>{
    colBack(err, doc)
  })
}

exports.findOneAndDelete = function (id, colBack) {
  CompanyObj.findOneAndDelete ({_id: id}, (err, result)=>{
    colBack(err, result);
  })
}