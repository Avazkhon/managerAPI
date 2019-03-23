const mongoose = require('mongoose');

// this app module
const KeyCookie = require('./keyCookie')

const keyCookie = new KeyCookie();
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  },
  contact: {
    email: { type : String , createIndexes : true, required : true, dropDups: true },
    phone: { type : Number , createIndexes : true, required : true, dropDups: true }
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
    password: {type: String, required: true},
    keyCookie: {type : String , createIndexes : true, required : true, dropDups: true, default: KeyCookie()}
  },

}, {collection: "users "});

let UserObj = mongoose.model("UserObj", UserSchema);

module.exports = UserObj;