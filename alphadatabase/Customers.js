const { db } = require('./dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')

// https://airtable.com/appTAdSTyVQUZeoDG/tblSf9R0mEYItX1Ef
let Customers_Base_Id='appTAdSTyVQUZeoDG'

let Customers_Fieldname='Customers'

let Customers_Fileid='tblSf9R0mEYItX1Ef'

 getdatafromAT(Customers_Base_Id,Customers_Fileid,Customers_Fieldname)
//  deleteData(Customers_Fieldname)
