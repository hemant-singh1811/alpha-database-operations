// Airtable.com/appTAdSTyVQUZeoDG/tblvLpECzEvSGftSw


const { db } = require('../dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('../at_obs')


let insurance_adjuster_Base_Id='appTAdSTyVQUZeoDG'

let insurance_adjuster_Fieldname='Insurance Adjuster'

let insurance_adjuster_Fileid='tblvLpECzEvSGftSw'

 getdatafromAT(insurance_adjuster_Base_Id,insurance_adjuster_Fileid,insurance_adjuster_Fieldname)
// deleteData(Dh_Team_Fieldname)
