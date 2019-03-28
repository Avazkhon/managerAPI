const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

let CompanySchema = new Schema ({
  name: {
    nameCompany: {type: String, required: true},
    shortName: {type: String, required: true},
  },
  stateRegister: {
  	INN: { type : Number , createIndexes : true, required : true, dropDups: true },
  	ORGN: { type : Number , createIndexes : true, required : true, dropDups: true }
  },
  address: {
  	sity: {type: String, required: true},
  	street: {type: String, required: true}
  },
  contact: {
    email: { type : String , createIndexes : true, required : true, dropDups: true },
    phone: { type : Number , createIndexes : true, required : true, dropDups: true }
  },

}, {collection: "company"});

let CompanyObj = mongoose.model("CompanyObj", CompanySchema);

module.exports = CompanyObj;