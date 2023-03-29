
// Airtable.com/appTAdSTyVQUZeoDG/tblenNgLeBDU4bSjX

const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('../at_obs')


let driver_hiring_insructions_Base_Id='appTAdSTyVQUZeoDG'

let driver_hiring_instructions_Fieldname='Driver Hiring Instructions'

let driver_hiring_instructions_Fileid='tblenNgLeBDU4bSjX'

 getdatafromAT(driver_hiring_insructions_Base_Id,driver_hiring_instructions_Fileid,driver_hiring_instructions_Fieldname)
// deleteData(Dh_Team_Fieldname)
