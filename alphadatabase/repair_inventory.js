// https://airtable.com/appghm1gqUhodLmMD/tblWyN9dUHqSx1V1O
const { db } = require('./dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')

let repair_inventory_Base_Id='appghm1gqUhodLmMD'

let repair_inventory_Fieldname='Repairs-Inventory'

let repair_inventory_Fileid='tblWyN9dUHqSx1V1O'

 getdatafromAT(repair_inventory_Base_Id,repair_inventory_Fileid,repair_inventory_Fieldname)
// deleteData(Dh_Team_Fieldname)
