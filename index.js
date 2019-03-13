const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect(' mongodb://127.0.0.1:27017/userDB', { useNewUrlParser: true });
let Schema = mongoose.Schema;

let UserSchema = new Schema({
	name: {type: String, required: true},
	age: Number
}, {collection: "users "});

let UserObj = mongoose.model("UserObj", UserSchema);

const app = express();

let port = 2020;

app.use(bodyParser.json());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
  res.send('Hello, i ma Manager!')
});

app.get('/userGet', (req, res)=>{
  UserObj.find((err, doc)=>{
  	if(err) {
  		console.log(err);
  		res.sendStatus(500);
  		return 
  	} 
  	res.send(doc);
  })
});

app.post('/userNew', (req, res)=>{
  let user = req.body;
  let userObj = new UserObj(user)
  userObj.save( (err, doc)=> {
    if (err)  {
	  console.log(err);
	  return res.sendStatus(500)
    };
    res.send(doc)
  });
});

app.put('/userUpdate/:id', (req, res)=>{
  let id = req.params.id
  let user = req.body;
  let userObj = new UserObj(user);

  console.log(userObj);

  UserObj.findOneAndUpdate({_id: id}, user, { "new": true},  (err, doc)=>{
  	if(err) {
      console.log(err);
      return res.sendStatus(500)
  	}
  	res.send(doc)
  })
});

app.delete('/userDelete/:id', (req, res)=>{
  let idreq = req.params.id;
  UserObj.deleteOne({id: idreq}, (err, doc)=>{
  	if(err) {
      console.log(err);
      return res.sendStatus(500)
  	}
  	res.send(doc);
  })
});



app.listen(port, ()=>{
  console.log("app starting! port- localhost:" + port);
  console.log("Date start: " + new Date)
});