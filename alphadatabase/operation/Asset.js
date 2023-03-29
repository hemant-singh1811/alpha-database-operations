const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')


let Assets_Base_Id='appTAdSTyVQUZeoDG'

let Assets_Fieldname='Assets'

let Assets_Fileid='tbl4AlOUezpUNRXtz'

// Airtable.com/appTAdSTyVQUZeoDG/tblYs9fOVZAXsMXp4


 getdatafromAT(Assets_Base_Id,Assets_Fileid,Assets_Fieldname)
// deleteData(Dh_Team_Fieldname)
