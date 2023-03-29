// Airtable.com/appTAdSTyVQUZeoDG/tblRcTHdXYkenFEeO


const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('../at_obs')


let Insurance_claim_Base_Id='appTAdSTyVQUZeoDG'

let Insurance_claim_Fieldname='Insurance Claims'

let Insurance_claim_Fileid='tblRcTHdXYkenFEeO'

 getdatafromAT(Insurance_claim_Base_Id,Insurance_claim_Fileid,Insurance_claim_Fieldname)
// deleteData(Dh_Team_Fieldname)
