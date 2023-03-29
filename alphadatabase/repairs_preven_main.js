// https://airtable.com/appghm1gqUhodLmMD/tblgSFXOBvw1E6jx8
const { db } = require('./dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')



let base_Id='appghm1gqUhodLmMD'

let fieldname='Repairs - Preventative Maintenance'

let fileid='tblgSFXOBvw1E6jx8'

 getdatafromAT(base_Id,fileid,fieldname)
// deleteData(Dh_Team_Fieldname)
