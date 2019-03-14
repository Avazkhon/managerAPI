const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {type: String, required: true},
  age: Number
}, {collection: "users "});

let UserObj = mongoose.model("UserObj", UserSchema);

module.exports = UserObj;