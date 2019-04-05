const mongoose = require('mongoose');

// this app module
const KeyCookie = require('./KeyCookie')

const Schema = mongoose.Schema;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
});

let UserSchema = new Schema({
  name: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  },
  contact: {
    email: { type : String, required : true, trim: true, createIndexes: true, unique: true },
    phone: { type : Number, required : true, trim: true, createIndexes: true, unique: true }
  },
  defaultInfo: {
    createDate: {
      type: Date,
      default: new Date
    },
    statusActive: {
      type: Boolean,
      default: true
    }
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
    keyCookie: {type : String, required : true , default: KeyCookie}
  },

}, {collection: "users"});

const userDB = mongoose.connection.useDb('userDB');

let UserObj = userDB.model("UserObj", UserSchema);

module.exports = UserObj;