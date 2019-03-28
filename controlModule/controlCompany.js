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
  let newCompany = req.body; 
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