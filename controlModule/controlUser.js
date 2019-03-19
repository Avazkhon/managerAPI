const User = require('../userModule/User')

exports.find = function (req, res) {
  User.find((err, doc)=>{
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return
  	}
  	res.send(doc)
  })
}

exports.findId = function (req, res) {
  let id = req.params.id;
  User.findId(id, (err, doc)=>{
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return
    }
    res.send(doc)
  })
}

exports.save = function (req, res){
  let newUser = req.body; 
  if(!newUser){
	 res.sendStatus(400)
   return
  }

  User.save(newUser, (err, doc)=>{
	if(err) {
	  console.log(err)
	  res.send(err.message)
    return
	}
	res.send(doc)
  })
}

exports.findOneAndUpdate = function (req, res) {
  let id = req.params.id;
  let user = req.body;

  User.findOneAndUpdate(id, user, (err, doc)=>{
  	if(err) {
  	  console.log(err)
      res.sendStatus(500)
      return
  	}
  	res.send(doc)
  })
}

exports.findOneAndDelete = function (req, res) {
  let id = req.params.id;

  User.findOneAndDelete(id, (err, doc)=>{
  	if(err) {
      console.log(err);
      res.sendStatus(500);
      return
  	}
  	res.send(doc)
  })
}