const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {
  	firstName: {type: String, required: true},
  	lastName: {type: String, required: true}
  },
  contact: {
  	email: {type: String, required: true},
  	phone: {type: Number, required: true}
  },
  creditBalans: {
  	type: Number,
  	default: 100
  },
  statusUser: {
    admin: {
      type: Boolean,
      default: true
    },
    emailConfirmation: {
      type: Boolean,
      default: false
    }
  },
  security: {
    nickName: {type: String, required: true},
    password: {type: String, required: true}
  },
  age: {type: Number, required: true}

}, {collection: "users "});

let UserObj = mongoose.model("UserObj", UserSchema);

module.exports = UserObj;