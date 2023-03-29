const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('../at_obs')


let Loss_Runs_Base_Id='appTAdSTyVQUZeoDG'

let Loss_Runs_Fieldname='Loss Runs'

let Loss_Runs_Fileid='tblYs9fOVZAXsMXp4'

// Airtable.com/appTAdSTyVQUZeoDG/tblYs9fOVZAXsMXp4


 getdatafromAT(Loss_Runs_Base_Id,Loss_Runs_Fileid,Loss_Runs_Fieldname)
// deleteData(Dh_Team_Fieldname)
