const Company = require('../companyModule/Company')

exports.find = function (req, res) {
  Company.find((err, doc)=>{
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return
  	}
  	res.send(doc)
  })
}


exports.save = function (req, res){
  const newCompany = req.body; 
  if(!newCompany){
	 res.sendStatus(400)
   return
  }

  Company.save(newCompany, (err, doc)=>{
	if(err) {
	  console.log(err)
	  res.send(err.message)
    return
	}
	res.send(doc)
  })
}


exports.findOneAndUpdate = function (req, res){
  const id = req.params.id;
  let update = req.body; 
  if(!update){
   res.sendStatus(400)
   return
  }

  Company.findOneAndUpdate (id, update, (err, doc)=>{
    if(err) {
      console.log(err);
      res.sendStatus(500);
      return
    };
    res.sendStatus(202)
  })
}


exports.findOneAndDelete = function (req, res){
  const id = req.params.id;

  Company.findOneAndDelete(id, (err, result)=>{
    if(err) {
      console.log(err);
      res.sendStatus(500);
      return
    };
      res.sendStatus(200)
  })
}