
const User = require('../userModule/User')

exports.cookie = function (req, res) {
  let email = req.body.email;
  User.criteriondUser(email, (err, person)=>{
  	if(err) {
      console.log(err)
      res.sendStatus(400)
      return
   }

  	status(person);

  });

  function status (person) {
  	if(person === null){
  	  res.sendStatus(400)
  	  return
  	}
  	if(person.security.password == req.body.password) {
	  if(!req.headers.cookie) {
	  	res.cookie('statusUser', 123, { maxAge: 900000, httpOnly: true });
	  	res.send(person);
	  	return
	  };
	  res.send(person);
	  return
  	};
  	  res.sendStatus(400)
  };
};