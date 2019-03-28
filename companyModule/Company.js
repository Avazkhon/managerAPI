const mongoose = require('mongoose');

// module this api
const CompanyObj = require('./companyModal');

// mongoose.connect(' mongodb://127.0.0.1:27017/companyDB', { useNewUrlParser: true });

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