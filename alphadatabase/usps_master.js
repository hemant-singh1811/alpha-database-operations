const { db } = require('./dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')

// https://airtable.com/appIZwCKdlZ7p20ww/tblatFbbhRXyK7xQ2
let usps_master_Base_Id='appIZwCKdlZ7p20ww'

let usps_master_Fieldname='USPS Master'

let usps_master_Fileid='tblatFbbhRXyK7xQ2'

 getdatafromAT(usps_master_Base_Id,usps_master_Fileid,usps_master_Fieldname)
// deleteData(Dh_Team_Fieldname)
