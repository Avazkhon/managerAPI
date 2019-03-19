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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// module this api
const User = require ("./controlModule/controlUser")

app.get('/', (req, res)=>{
  res.send('Hello, i ma Manager!')
});

app.get('/userGet', User.find)
app.get('/userGet/:id', User.findId)
app.post('/userNew', User.save)
app.put('/userUpdate/:id', User.findOneAndUpdate)
app.delete('/userDelete/:id', User.findOneAndDelete)



app.listen(port, ()=>{
  console.log("app starting! port- localhost:" + port);
  console.log("Date start: " + new Date)
});