
const User = require('../userModule/User')

exports.newCookie = function (req, res, next) {
  if(!req.body || !req.body.security.password  || !req.body.contact.email) {
      res.sendStatus(400)
      return
   }

   let email = req.body.email;
   let password = req.body.security.password;

  User.criteriondUserEmail(email, (err, person)=>{
    if(err) {
      console.log(err)
       .sendStatus(400)
      return
   }

    status(person);

  });

  function status (person) {
    if(person === null){
      res.sendStatus(400)
      return
    }
    
    if(person.security.password == password) {
      if(!req.headers.cookie) {
        res.cookie('statusUser', person.security.keyCookie, { maxAge: 900000, httpOnly: true });
        res.sendStatus(200)
        return
      };
    res.sendStatus(200)
    return
    };
      res.sendStatus(400)
  };
};



exports.cookie = function (req, res, next) {
  if(!req.headers.cookie) {
    res.sendStatus(401)
    return
  };
  let keyCookie = "";
  for (let i = 0 ; i <= 65; i++) {
    if(i>10){
      keyCookie += req.headers.cookie[i]
    }
  }

  User.criteriondCookue(keyCookie, (err, person)=>{
    if(err) {
      console.log(err)
      res.sendStatus(400)
      return
    }  

    if(person.security.keyCookie) {
      next()
    }
    
  })
}