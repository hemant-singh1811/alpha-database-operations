// https://airtable.com/appIZwCKdlZ7p20ww/tblJ0CjtScyLsthGw


const { db } = require('./dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')
let usps_dispatch_Base_Id='appIZwCKdlZ7p20ww'

let usps_dispatch_Fieldname='USPS Dispatch'

let usps_dispatch_Fileid='tblJ0CjtScyLsthGw'

 getdatafromAT(usps_dispatch_Base_Id,usps_dispatch_Fileid,usps_dispatch_Fieldname)
// deleteData(Dh_Team_Fieldname)
