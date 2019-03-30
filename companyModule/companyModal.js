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
  	INN: { type : Number , required : true, trim: true, createIndexes: true, unique: true },
  	ORGN: { type : Number , required : true, time: true, createIndexes: true, unique: true }
  },
  address: {
  	sity: {type: String, required: true},
  	street: {type: String, required: true}
  },
  contact: {
    email: { type : String , required : true, trim: true, createIndexes: true, unique: true},
    phone: { type : Number , required : true, trim: true, createIndexes: true, unique: true}
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
  companyLevel: {
    lavel: {type: String, default: "small" },
    statutoryCapital: {type: Number, min: 10000, default : 10000},
    staffSize: {type: String, default: 1}
  },
  fieldОfActivity: {
    main:{
      type: Array, 
    },
    all: {
      type: Array
    }
  },
  creditBalans: {
    balans: {
      typeСurrency: {
        type: String,
        default: "RUB"
      },
      count: {type: Number, default: 100}
    },
    rate: {
      type: String,
      default: "base"
    }
  },

}, {collection: "company"});

const companyDB = mongoose.connection.useDb('companyDB');

const CompanyObj = companyDB.model("CompanyObj", CompanySchema);

module.exports = CompanyObj;