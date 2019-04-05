const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect(' mongodb://127.0.0.1:27017/userDB', { useNewUrlParser: true });

const app = express();

let port = 2020;

app.use(bodyParser.json());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:2222");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// module this api
const User = require ("./controlModule/controlUser");
const Company = require ("./controlModule/controlCompany");
const Sessions = require ('./sessions/session');

app.post('/userStatus', Sessions.newCookie);

app.get('/userGet', Sessions.cookie, User.find);
app.get('/userGet/:id', Sessions.cookie, User.findId);
app.post('/userNew', User.save);
app.put('/userUpdate/:id', Sessions.cookie, User.findOneAndUpdate);
app.delete('/userDelete/:id', Sessions.cookie, User.findOneAndDelete);

app.get('/companyGet', Company.find);
app.get('/companyGet/:id', Company.findID);
app.post('/companyNew', Company.save);
app.put('/companyUpdate/:id', Company.findOneAndUpdate);
app.delete('/companyDelete/:id', Company.findOneAndDelete);


app.listen(port, ()=>{
  console.log("app starting! port- localhost:" + port);
  console.log("Date start: " + new Date)
});