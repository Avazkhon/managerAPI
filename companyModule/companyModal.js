const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
});


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

const companyDB = mongoose.connection.useDb('companyDB');

const CompanyObj = companyDB.model("CompanyObj", CompanySchema);

module.exports = CompanyObj;