const { db } = require('./dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')

// https://airtable.com/appTAdSTyVQUZeoDG/tblZbgbRBQZWEgnvI/
let Brokers_Base_Id='appTAdSTyVQUZeoDG'

let Brokers_Fieldname='Brokers'

let Brokers_Fileid='tblZbgbRBQZWEgnvI'

 getdatafromAT(Brokers_Base_Id,Brokers_Fileid,Brokers_Fieldname)
//  deleteData(Brokers_Fieldname)
