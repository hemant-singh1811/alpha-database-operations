
const { db } = require('./dbconfig')

const firebase = require('firebase-admin')
const {getdatafromAT}=require('./at_obs')

let sales_current_shippers_Base_Id='app4NXV8qXVsAHw81'

let sales_current_shippers_Fieldname='Sales-Current-Shippers'

let sales_current_shippers_Fileid='tblcVbZjAdUQLfgvH'

 getdatafromAT(sales_current_shippers_Base_Id,sales_current_shippers_Fileid,sales_current_shippers_Fieldname)
// deleteData(Dh_Team_Fieldname)
